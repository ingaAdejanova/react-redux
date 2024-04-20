import { birthdayReducer } from '../../../redux/reducers'
import { FETCH_BIRTHDAYS_REQUEST, FETCH_BIRTHDAYS_SUCCESS, FETCH_BIRTHDAYS_FAILURE } from '../../../redux/actionTypes'

describe('Redux Reducer', () => {
  it('should handle FETCH_BIRTHDAYS_REQUEST', () => {
    expect(birthdayReducer(undefined, { type: FETCH_BIRTHDAYS_REQUEST })).toEqual({
      birthdays: [],
      isLoading: true,
      error: null,
    })
  })

  it('should handle FETCH_BIRTHDAYS_SUCCESS', () => {
    const birthdays = [{ text: 'John', year: 1995 }]
    expect(birthdayReducer(undefined, { type: FETCH_BIRTHDAYS_SUCCESS, payload: birthdays })).toEqual({
      birthdays,
      isLoading: false,
      error: null,
    })
  })

  it('should handle FETCH_BIRTHDAYS_FAILURE', () => {
    const error = 'Error message'
    expect(birthdayReducer(undefined, { type: FETCH_BIRTHDAYS_FAILURE, payload: error })).toEqual({
      birthdays: [],
      isLoading: false,
      error,
    })
  })
})
