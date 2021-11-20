import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../comps/UserContext';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
	const [user, setUser] = useState({ user: 'test', display_name: 'not logged in' });

	const signIn = async (userObj) => {
		await setUser(userObj);
	};

	useEffect(() => {
		alert(JSON.stringify(user));
	}, [user]);

	return (
		<UserContext.Provider value={{ user: user, signIn: signIn }}>
			<Component {...pageProps} />
		</UserContext.Provider>
	);
}

export default MyApp;
