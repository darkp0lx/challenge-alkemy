import React from 'react'
import { Container } from 'react-bootstrap'
import { CardsGrid } from '../Card/CardsGrid'
import { MyTeam } from '../MyTeam'
import { Search } from '../Search'

export const Home = () => {
  return (
    <Container style={{ marginTop: '125px' }}>
      <MyTeam />
      <Search />
      <CardsGrid />
    </Container>
  )
}
