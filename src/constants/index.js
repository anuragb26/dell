export const TOAST_TIMER = 1000
export const BASE_API_URL = 'http://localhost:3002/restaurants'
export const PER_PAGE = 9
export const TOTAL_COUNT = 125527

export const getRestaurantsUrl = queryString =>
  queryString
    ? `${BASE_API_URL}?${queryString}`
    : `${BASE_API_URL}`