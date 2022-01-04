import axios from 'axios';

// Axios config to send JWT in the header with each request
function authAxios() {
	const token = window.localStorage.getItem('token');

	const authInstance = axios.create({
		baseURL: 'https://binibin-server.herokuapp.com',
		// baseURL: 'http://localhost:8080',
		headers: { Authorization: `Bearer ${token}` },
	});

	return authInstance;
}

// ****** Examples ***** //
export async function getCompost(startDate, endDate) {
	return await authAxios().get(`/api/entries/compost/${startDate}/${endDate}`);
}
export async function getGarbage(startDate, endDate) {
	return await authAxios().get(`/api/entries/garbage/${startDate}/${endDate}`);
}

// ****** more generic function to get data for graphs ***** //
export async function getData(startDate, endDate, itemName) {
	return await authAxios().get(`/api/entries/${itemName}/${startDate}/${endDate}`);
}

// Submitting a new entry
export async function postEntry(entryContent) {
	return await authAxios().post(`/api/entries/add`, { entryContent });
}

//BUG: login request - unable to receive the user token from server //

export async function loginUser(username, password) {
	console.log('network loginUser --- user: ' + username + password);
	return await authAxios().post(`/auth/login`, {
		credentials: 'include',
		body: {
			username,
			password,
		},
		// headers: { 'Content-Type': 'application/json' },
	});
}
