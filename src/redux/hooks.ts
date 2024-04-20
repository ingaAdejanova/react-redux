import { useDispatch, useSelector } from 'react-redux'
import store from './store'
import { BirthdayState } from './types/birthday'
import { ModalState } from './types/modal'

export type RootState = {
  birthday: BirthdayState
  modal: ModalState
}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
