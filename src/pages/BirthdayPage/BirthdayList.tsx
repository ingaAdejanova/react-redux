import React from 'react'
import styled from 'styled-components'

import theme from '../../theme'
import { Birthday } from '../../redux/types/birthday'

type Props = {
  birthdays: Birthday[]
}

const Item = styled.div`
  border-radius: 5px;
  padding: 35px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
`

const Name = styled.div`
  color: ${theme.colors.black};
  font-size: 18px;
`

export const BirthdayList = ({ birthdays }: Props) => (
  <>
    {birthdays.map((birthday) => {
      const { text, year } = birthday || {}

      return (
        <Item key={text}>
          <Name>
            {text} ({year})
          </Name>
        </Item>
      )
    })}
  </>
)
