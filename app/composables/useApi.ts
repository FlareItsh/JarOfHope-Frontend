export const useApi = <T>(url: string | (() => string), options: any = {}) => {
  const config = useRuntimeConfig()
  const token = useCookie('token')

  return useFetch<T>(url, {
    ...options,
    baseURL: config.public.apiBaseURL,
    headers: {
      Accept: 'application/json',
      ...options.headers,
      Authorization: token.value ? `Bearer ${token.value}` : '',
    },
  })
}

export const $api = <T>(url: string, options: any = {}) => {
  const config = useRuntimeConfig()
  const token = useCookie('token')

  return $fetch<T>(url, {
    ...options,
    baseURL: config.public.apiBaseURL,
    headers: {
      Accept: 'application/json',
      ...options.headers,
      Authorization: token.value ? `Bearer ${token.value}` : '',
    },
  })
}
