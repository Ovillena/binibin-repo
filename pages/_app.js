import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../comps/UserContext';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
	const [user, setUser] = useState({ user: 'test', display_name: 'not logged in' });

	const [loginStatus, setLoginStatus] = useState(false);

	const signIn = (userObj) => {
		console.log('---------called sign in----------------------');
		setLoginStatus(true);
		setUser(userObj);
		alert(JSON.stringify(user));
	};

	useEffect(() => {
		axios
			.get(
				'https://binibin-server.herokuapp.com/auth/checkauth',
				// 'http://localhost:8080/auth/checkauth',
				{ withCredentials: true }
			)
			.then((response) => {
				let loggedIn = response.data['logged in'];
				if (Router.pathname != '/' && !loggedIn && !loginStatus) {
					return Router.push('/login');
				} else if (Router.pathname === '/' && !loggedIn && !loginStatus) {
					throw new Error('No session cookie detected');
				} else {
					return response;
				}
			})
			.then((response) => {
				let userObj = response.json();
				console.log('---------check auth resp----------------------');
				// alert(userObj);
				signIn(userObj);
			})
			.catch((err) => {
				console.log(err);
			});
		// alert(JSON.stringify(user));
	}, [user]);

	return (
		<UserContext.Provider value={{ user: user, signIn: signIn }}>
			<Component {...pageProps} />
		</UserContext.Provider>
	);
}

export default MyApp;
