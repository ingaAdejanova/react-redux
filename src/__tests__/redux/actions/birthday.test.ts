import {
  fetchBirthdays,
  fetchBirthdaysRequest,
  fetchBirthdaysSuccess,
  fetchBirthdaysFailure,
} from '../../../redux/actions'
import { fetchData } from '../../../api/fetcher'

jest.mock('../../../api/fetcher', () => ({
  fetchData: jest.fn(),
}))

const mockedFetchData = fetchData as jest.MockedFunction<typeof fetchData>

describe('Redux Actions', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should create an action to fetch birthdays request', () => {
    const expectedAction = { type: 'FETCH_BIRTHDAYS_REQUEST' }
    expect(fetchBirthdaysRequest()).toEqual(expectedAction)
  })

  it('should create an action to fetch birthdays success', () => {
    const birthdays = [{ text: 'John', year: 2002 }]
    const expectedAction = { type: 'FETCH_BIRTHDAYS_SUCCESS', payload: birthdays }
    expect(fetchBirthdaysSuccess(birthdays)).toEqual(expectedAction)
  })

  it('should create an action to fetch birthdays failure', () => {
    const error = 'Error message'
    const expectedAction = { type: 'FETCH_BIRTHDAYS_FAILURE', payload: error }
    expect(fetchBirthdaysFailure(error)).toEqual(expectedAction)
  })

  it('should dispatch fetchBirthdaysSuccess after successful data fetch', async () => {
    const dispatch = jest.fn()

    const birthdays = [{ text: 'Sara', year: 1995 }]
    mockedFetchData.mockResolvedValue({ births: birthdays })

    await fetchBirthdays()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(fetchBirthdaysRequest())
    expect(dispatch).toHaveBeenCalledWith(fetchBirthdaysSuccess(birthdays))
  })

  it('should dispatch fetchBirthdaysFailure after failed data fetch', async () => {
    const dispatch = jest.fn()

    const error = 'Error message'
    mockedFetchData.mockRejectedValue(error)

    await fetchBirthdays()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(fetchBirthdaysRequest())
    expect(dispatch).toHaveBeenCalledWith(fetchBirthdaysFailure(error))
  })
})
