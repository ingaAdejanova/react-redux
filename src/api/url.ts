const BASE_URL = 'https://en.wikipedia.org/api/rest_v1/feed'

export const API_URL = {
  ONTHISDAY_BIRTHS: (month: number, day: number) => `${BASE_URL}/onthisday/births/${month}/${day}`,
}
