import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'

import theme from '../../theme'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchBirthdays, openModal } from '../../redux/actions'
import { ModalType } from '../../redux/types/modal'
import { Button } from '../../components/Button'
import { BirthdayList } from './BirthdayList'

const Container = styled.div`
  background-color: ${theme.colors.lightGray};
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  color: ${theme.colors.black};
  font-weight: 600;
  font-size: 48px;
  margin-bottom: 30px;
`

const Subtitle = styled.div`
  color: ${theme.colors.gray};
  font-size: 20px;
  margin-bottom: 40px;
`

const StyledButton = styled(Button)`
  width: 174px;
`

const BirthdayPage = () => {
  const dispatch = useAppDispatch()
  const { birthdays, error, isLoading } = useAppSelector((state) => state.birthday)

  const handleFetchBirthdays = () => {
    dispatch(fetchBirthdays())
  }

  useEffect(() => {
    if (error) {
      dispatch(openModal(ModalType.ERROR))
    }
  }, [error, dispatch])

  const sortedBirthdays = useMemo(() => {
    return [...birthdays].sort((a, b) => a.year - b.year)
  }, [birthdays])

  return (
    <>
      <Container>
        <Title>Birthdays Today</Title>
        <Subtitle>Explore today's birthdays and celebrate with us!</Subtitle>
        <StyledButton isLoading={isLoading} onClick={handleFetchBirthdays}>
          Fetch Birthdays
        </StyledButton>
      </Container>
      <BirthdayList birthdays={sortedBirthdays} />
    </>
  )
}

export default BirthdayPage
