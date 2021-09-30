import { MyTeam } from '../MyTeam'
import { Search } from '../Search'
import { Container } from 'react-bootstrap'
import { CardsGrid } from '../Card/CardsGrid'

export const Home = () => {
  return (
    <Container>
      <MyTeam id='my-team' />
      <Search />
      <CardsGrid />
    </Container>
  )
}
