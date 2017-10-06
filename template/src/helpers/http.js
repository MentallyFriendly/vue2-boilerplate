import axios from 'axios'
import router from '../router'

export const HTTP = axios.create({
  baseURL: ``
})

HTTP.interceptors.response.use((response) => {
  return response
}, function (error) {
  if (error.response.status === 500) {
    router.push({name: 'Error', query: { status: error.response.status, statusText: error.response.statusText }})
  }
  if (error.response.status === 422) {
    // router.push({name: 'Error', query: { status: error.response.status, statusText: error.response.statusText }})
  }
  if (error.response.status === 404) {
    router.push({name: 'Error', query: { status: error.response.status, statusText: error.response.statusText }})
  }
  if (error.response.status === 401) {
    router.push({name: 'Error', query: { status: error.response.status, statusText: error.response.statusText }})
  }
  if (error.response.status === 400) {
    router.push({name: 'Error', query: { status: error.response.status, statusText: error.response.statusText }})
  }
  if (error.response.status === 201) {
    console.log(error.response)
  }
  if (error.response.status === 200) {

  }
  return Promise.reject(error.response)
})
