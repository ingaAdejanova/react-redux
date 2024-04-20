import axios, { AxiosResponse, Method } from 'axios'

export const fetchData = async <T>(url: string, method: Method = 'get', data?: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.request({
      url,
      method,
      data,
    })

    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message)
  }
}
