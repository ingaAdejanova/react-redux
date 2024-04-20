import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Button } from '../../components/Button'

describe('Button component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should renders a button with provided text', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('should call onClick handler when the button is clicked', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    const button = screen.getByText('Click me')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
