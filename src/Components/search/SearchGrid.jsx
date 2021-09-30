import { Container } from 'react-bootstrap'
import { CardItem } from './CardItem'

function SearchGrid ({ heros }) {
  return (
    <Container className='d-flex justify-content-center gap-2 flex-wrap'>
      {heros?.map(hero => (
        <CardItem hero={hero} />
      ))}
    </Container>
  )
}
export default SearchGrid
