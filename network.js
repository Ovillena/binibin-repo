import axios from 'axios';

// Axios config to send JWT in the header with each request
function authAxios() {
	const token = window.localStorage.getItem('token');

	const authInstance = axios.create({
		baseURL: 'https://binibin-server.herokuapp.com/api',
		// timeout: 1000,
		headers: { Authorization: `Bearer ${token}` },
	});

	return authInstance;
}

// ****** Examples ***** //
export async function getCompost(startDate, endDate) {
	return await authAxios().get(`/entries/compost/${startDate}/${endDate}`);
}
export async function getGarbage(startDate, endDate) {
	return await authAxios().get(`/entries/garbage/${startDate}/${endDate}`);
}

// ****** more generic function ***** //
export async function getData(startDate, endDate, itemName) {
	return await authAxios().get(`/entries/${itemName}/${startDate}/${endDate}`);
}

export async function postEntry() {}
