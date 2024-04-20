import React from 'react'

type Props = {
  className?: string
  width?: number
  height?: number
}

export const Close = ({ className, width = 24, height = 24 }: Props) => (
  <svg className={className} viewBox="0 0 24 24" width={width} height={height}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12" />
  </svg>
)
