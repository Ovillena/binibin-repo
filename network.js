import axios from 'axios'

function authAxios() {
  const token = window.localStorage.getItem("token")

  const authInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 1000,
    headers: {'Authorization': `Bearer ${token}`}
  });
  
  return authInstance
}


export async function getCompost(startDate, endDate) {
  return await authAxios().get(`/compost/${startDate}/${endDate}`)
}
export async function getGarbage(startDate, endDate) {
  return await authAxios().get(`/garbage/${startDate}/${endDate}`)
}