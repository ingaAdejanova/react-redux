import React, { useRef } from 'react'
import styled from 'styled-components'

import theme from '../../theme'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { closeModal } from '../../redux/actions'
import { Close } from '../Icons'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const ModalContent = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 90%;
  padding: 30px;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.black};
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  height: 40px;

  &:hover {
    background-color: ${theme.colors.lightGray};
  }
`

const StyledCloseIcon = styled(Close)`
  color: ${theme.colors.gray};
`

const ModalText = styled.div`
  color: ${theme.colors.gray};
  font-size: 16px;
`

const MODAL_TYPE_TEXTS = {
  error: {
    title: 'Error',
    text: 'Please try again later.',
  },
}

export const Modal = () => {
  const dispatch = useAppDispatch()
  const { isOpen, modalType, modalProps } = useAppSelector((state) => state.modal)
  const modalRef = useRef<HTMLDivElement>(null)

  useOutsideClick(modalRef, () => {
    dispatch(closeModal())
  })

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  const { title = '', text = '' } = modalType ? MODAL_TYPE_TEXTS[modalType] : {}

  return (
    <>
      {isOpen && (
        <ModalWrapper>
          <ModalContent ref={modalRef}>
            <ModalHeader>
              <ModalTitle>{modalProps?.title || title}</ModalTitle>
              <CloseButton onClick={handleCloseModal}>
                <StyledCloseIcon />
              </CloseButton>
            </ModalHeader>
            <ModalText>{modalProps?.text || text}</ModalText>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  )
}
