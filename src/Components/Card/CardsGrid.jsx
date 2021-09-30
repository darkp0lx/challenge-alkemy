import { generateNumbers, shuffle } from '../../helpers/utils'
import { Container } from 'react-bootstrap'
import { useStateValue } from '../../Store/StateProvider'
import { Suspense, lazy } from 'react'
import { Loading } from '../base/Loading'

const CardItem = lazy(() => import('./CardItem'))
const SearchGrid = lazy(() => import('../search/SearchGrid'))

export const CardsGrid = () => {
  const idsHeros = shuffle(generateNumbers(0, 731)).slice(0, 20)
  const [{ data }] = useStateValue()
  return (
    <Container className='d-flex justify-content-center flex-wrap gap-2'>
      <Suspense fallback={<Loading />}>
        {!data || data.length === 0 ? (
          idsHeros.map(id => (
            <Suspense index={id} fallback={<Loading />}>
              <CardItem id={id} />
            </Suspense>
          ))
        ) : (
          <Suspense fallback={<Loading />}>
            <SearchGrid heros={data} />
          </Suspense>
        )}
      </Suspense>
    </Container>
  )
}
