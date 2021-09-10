import { CardItem } from './CardItem'
import { generateNumbers, ids, shuffle } from '../../helpers/utils'
import { Container } from 'react-bootstrap'
import { useStateValue } from '../../Store/StateProvider'
import { SearchGrid } from '../search/SearchGrid'

export const CardsGrid = () => {
  const idsHeros = shuffle(generateNumbers(0, 731)).slice(0, 20)
  const [{ data }] = useStateValue()
  return (
    <Container className='d-flex justify-content-center flex-wrap gap-2'>
      {!data || data.length == 0 ? (
        idsHeros.map(id => <CardItem id={id} />)
      ) : (
        <SearchGrid films={data} />
      )}
    </Container>
  )
}
