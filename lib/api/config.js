import axios from 'axios'
// const BASE_URL = 'https://netease-music-api.fe-mm.com/'
const BASE_URL = 'https://api.paugram.com'
const createBaseInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
  })

  instance.interceptors.response.use(handleResponse, handleError)
  return instance
}
export const request = createBaseInstance()

function handleError(e) {
  confirm(e.message, '出错啦~')
  throw e
}

function handleResponse(response) {
  return response.data
}