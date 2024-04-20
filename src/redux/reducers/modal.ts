import { OPEN_MODAL, CLOSE_MODAL } from '../actionTypes'
import { ModalAction, ModalState } from '../types/modal'

const initialState = {
  isOpen: false,
  modalType: null,
  modalProps: {},
}

export const modalReducer = (state: ModalState = initialState, action: ModalAction) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps,
      }
    case CLOSE_MODAL:
      return initialState
    default:
      return state
  }
}
