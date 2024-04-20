import styled from 'styled-components'
import theme from '../../theme'

export const Loader = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid ${theme.colors.white};
  border-color: ${theme.colors.white} transparent ${theme.colors.white} transparent;
  animation: ${theme.animations.rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`
