import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { Loader } from '../Loader'

const StyledButton = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 8px;
  height: 45px;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${theme.colors.darkBlue};
  }
`

type Props = {
  onClick: () => void
  children: React.ReactNode
  isLoading?: boolean
  className?: string
}

export const Button = ({ onClick, children, isLoading, className }: Props) => (
  <StyledButton className={className} onClick={onClick} disabled={isLoading}>
    {isLoading ? <Loader /> : children}
  </StyledButton>
)
