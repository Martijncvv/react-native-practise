import { create } from 'apisauce'

const client = create({ baseURL: 'http://192.168.178.39:9000/api' })
// const apiClient = create({ baseUrl: 'http://10.56.10.75:9000/api' })
export default client
