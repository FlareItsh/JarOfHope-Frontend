export const useApi = <T>(url: string | (() => string), options: any = {}) => {
  const config = useRuntimeConfig()
  const token = import.meta.client ? localStorage.getItem('token') : null

  return useFetch<T>(url, {
    ...options,
    baseURL: config.public.apiBaseURL,
    headers: {
      Accept: 'application/json',
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  })
}

export const $api = <T>(url: string, options: any = {}) => {
  const config = useRuntimeConfig()
  const token = import.meta.client ? localStorage.getItem('token') : null

  return $fetch<T>(url, {
    ...options,
    baseURL: config.public.apiBaseURL,
    headers: {
      Accept: 'application/json',
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  })
}
