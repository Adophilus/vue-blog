import axios from 'axios'
import config from '@/utils/config'

axios.defaults.baseURL = config.api.endpoint

export default axios.create({
  baseUrl: config.api.endpoint
})
