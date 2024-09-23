import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL ?? 'http://localhost:3000/api/v1'
export default axios.create({
	baseURL
})
