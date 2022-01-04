import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../comps/UserContext';
import Router from 'next/router';
import GuestNavBar from '../comps/GuestNavBar';
import UserNav from '../comps/UserNav';
import styled from 'styled-components';

import jwt_decode from 'jwt-decode';
// import useLocalStorage from 'react-use-localstorage';

function MyApp({ Component, pageProps }) {
	const [user, setUser] = useState({ user: 'test', display_name: 'not logged in' });
	const [token, setToken] = useLocalStorage('token');

	const [loginStatus, setLoginStatus] = useState(false);

	const signIn = (data) => {
		if (!data || !data.token) {
			console.log('user not logged in! deal with this');
			return;
		}
		const { token } = data;
		console.log('---------called sign in----------------------');
		setToken(token);

		console.log(token, user);

		try {
			const user = jwt_decode(token);
			setLoginStatus(true);
			setUser(user);
			return true;
		} catch (error) {
			console.log('Error decoding token');
			return false;
		}
		// alert(JSON.stringify(user));
	};

	const signOut = () => {
		localStorage.clear();
		setLoginStatus(false);
		setUser('');
		Router.push('/')
	}

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

	useEffect(() => {
		let loggedIn = false;
		if (token) {
			try {
				const user = jwt_decode(token);
				setLoginStatus(true);
				setUser(user);
				loggedIn = true;
			} catch (error) {
				console.log('Error decoding token');
			}
		}
		/* redirect user to login if protected page */
		if (!viewableIfLoggedOut(Router.pathname) && !loggedIn) {
			return Router.push('/login');
		} else {
			return;
		}
	}, [token]);

	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			'https://binibin-server.herokuapp.com/auth/checkauth',
	// 			// 'https://binibin-server.herokuapp.com/auth/checkauth',
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
		<UserContext.Provider value={{ user: user, signIn: signIn, loginStatus: loginStatus, signOut: signOut }}>
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

// Hook
function useLocalStorage(key, initialValue) {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			return item ? item : initialValue;
		} catch (error) {
			// If error also return initialValue
			console.log(error);
			return initialValue;
		}
	});
	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value) => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			// Save state
			setStoredValue(valueToStore);
			// Save to local storage
			window.localStorage.setItem(key, valueToStore);
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.log(error);
		}
	};
	return [storedValue, setValue];
}
