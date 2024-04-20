import { OPEN_MODAL, CLOSE_MODAL } from '../actionTypes'

export enum ModalType {
  ERROR = 'error',
}

export type ModalProps = {
  title?: string
  text?: string
}

export type ModalAction =
  | { type: typeof OPEN_MODAL; payload: { modalType: ModalType; modalProps?: ModalProps } }
  | { type: typeof CLOSE_MODAL }

export type ModalState = {
  isOpen: boolean
  modalType: ModalType | null
  modalProps: ModalProps
}
