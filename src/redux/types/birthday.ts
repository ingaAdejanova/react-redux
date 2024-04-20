import { FETCH_BIRTHDAYS_REQUEST, FETCH_BIRTHDAYS_SUCCESS, FETCH_BIRTHDAYS_FAILURE } from '../actionTypes'

export type BirthdayAction =
  | { type: typeof FETCH_BIRTHDAYS_REQUEST }
  | { type: typeof FETCH_BIRTHDAYS_SUCCESS; payload: Birthday[] }
  | { type: typeof FETCH_BIRTHDAYS_FAILURE; payload: string }

export type Birthday = {
  year: number
  text: string
}

export type BirthdayState = {
  birthdays: Birthday[]
  isLoading: boolean
  error: string | null
}
