import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../comps/UserContext';
import Router from 'next/router';
import GuestNavBar from '../comps/GuestNavBar';
import UserNav from '../comps/UserNav';
import styled from 'styled-components';

function MyApp({ Component, pageProps }) {
	const [user, setUser] = useState({ user: 'test', display_name: 'not logged in' });

	const [loginStatus, setLoginStatus] = useState(false);

	const signIn = (userObj) => {
		console.log('---------called sign in----------------------');
		console.log(JSON.stringify(userObj));
		setLoginStatus(true);
		setUser(userObj);
		// alert(JSON.stringify(user));
	};

	const viewableIfLoggedOut = (routePathname) => {
		switch (routePathname) {
			case '/':
			case '/aboutus':
			case '/signup':
			case '/thankyou_register':
			case '/customerservice':
			case '/thankyou_contact':
			case '/education':
				return true;
			default:
				return false;
		}
	};

	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			'https://binibin-server.herokuapp.com/auth/checkauth',
	// 			// 'http://localhost:8080/auth/checkauth',
	// 			{ withCredentials: true }
	// 		)
	// 		.then((response) => {
	// 			console.log(loginStatus);
	// 			let loggedIn = response.data['logged in'];
	// 			if (!viewableIfLoggedOut(Router.pathname) && (!loggedIn || !loginStatus)) {
	// 				return Router.push('/login');
	// 			} else if (viewableIfLoggedOut(Router.pathname) && (!loggedIn || !loginStatus)) {
	// 				throw new Error('No session cookie detected');
	// 			} else {
	// 				return response;
	// 			}
	// 		})
	// 		.then((response) => {
	// 			let userObj = JSON.stringify(response);
	// 			console.log('---------check auth resp----------------------');
	// 			console.log(userObj);
	// 			// alert(userObj);
	// 			// signIn(userObj);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// 	// alert(JSON.stringify(user));
	// }, [user]);

	return (
		<UserContext.Provider value={{ user: user, signIn: signIn, loginStatus: loginStatus }}>
			{loginStatus ? (
				<UserNav displayName={user['display_name']}></UserNav>
			) : (
				<GuestNavBar></GuestNavBar>
			)}
			<Component {...pageProps} />
		</UserContext.Provider>
	);
}

export default MyApp;
