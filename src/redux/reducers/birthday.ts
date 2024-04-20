import { FETCH_BIRTHDAYS_REQUEST, FETCH_BIRTHDAYS_SUCCESS, FETCH_BIRTHDAYS_FAILURE } from '../actionTypes'

import { BirthdayAction, BirthdayState } from '../types/birthday'

const initialState = {
  birthdays: [],
  isLoading: false,
  error: null,
}

export const birthdayReducer = (state: BirthdayState = initialState, action: BirthdayAction) => {
  switch (action.type) {
    case FETCH_BIRTHDAYS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case FETCH_BIRTHDAYS_SUCCESS:
      return {
        ...state,
        birthdays: action.payload,
        isLoading: false,
        error: null,
      }
    case FETCH_BIRTHDAYS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
