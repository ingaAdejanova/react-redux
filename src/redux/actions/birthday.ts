import { Dispatch } from 'redux'
import { fetchData } from '../../api/fetcher'
import { API_URL } from '../../api/url'
import { FETCH_BIRTHDAYS_REQUEST, FETCH_BIRTHDAYS_SUCCESS, FETCH_BIRTHDAYS_FAILURE } from '../actionTypes'

import { BirthdayAction, Birthday } from '../types/birthday'

export const fetchBirthdaysRequest = () => ({
  type: FETCH_BIRTHDAYS_REQUEST,
})

export const fetchBirthdaysSuccess = (payload: Birthday[]) => ({
  type: FETCH_BIRTHDAYS_SUCCESS,
  payload,
})

export const fetchBirthdaysFailure = (error: string) => ({
  type: FETCH_BIRTHDAYS_FAILURE,
  payload: error,
})

export const fetchBirthdays = (month: number, day: number) => async (dispatch: Dispatch<BirthdayAction>) => {
  dispatch(fetchBirthdaysRequest())

  try {
    const response = await fetchData<{ births: Birthday[] }>(API_URL.ONTHISDAY_BIRTHS(month, day))
    dispatch(fetchBirthdaysSuccess(response.births))
  } catch (error: any) {
    dispatch(fetchBirthdaysFailure(error.message))
  }
}
