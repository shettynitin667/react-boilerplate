import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { API_BASE_URL } from './consts'

const axiosConfig = {
  baseURL: API_BASE_URL,
}

export default class API {
  private static instance: AxiosInstance

  constructor() {
    if (!!API.instance) return
    API.instance = axios.create(axiosConfig)
  }

  public static get = (url: string, config?: AxiosRequestConfig) =>
    API.instance.get(url, config)

  public static post = (url: string, data: any, config?: AxiosRequestConfig) =>
    API.instance.post(url, data, config)

  public static put = (url: string, data: any, config?: AxiosRequestConfig) =>
    API.instance.put(url, data, config)

  public static delete = (url: string, config?: AxiosRequestConfig) =>
    API.instance.delete(url, config)
}
