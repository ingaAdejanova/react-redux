import { OPEN_MODAL, CLOSE_MODAL } from '../actionTypes'
import { ModalType, ModalProps } from '../types/modal'

export const openModal = (modalType: ModalType, modalProps?: ModalProps) => ({
  type: OPEN_MODAL,
  payload: { modalType, modalProps },
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
})
