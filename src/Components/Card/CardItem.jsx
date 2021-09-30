import { useState } from 'react'

import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { CardHover } from './CardHover'
import { useTeam } from '../../hooks/useTeam'
import { useGetHero } from '../../hooks/useGetHero'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function CardItem ({ id }) {
  const [isShow, setIsShow] = useState()
  const { hero } = useGetHero(id)
  const { isTeam } = useTeam(hero)
  const { isBadBoy } = useTeam(hero)

  return (
    <Container>
      <Card
        id='card'
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
        style={{ width: '18rem', height: '100%', position: 'relative' }}
        key={id}
        className={` ${isTeam() ? (isBadBoy() ? 'badBoy' : 'superhero') : ''}`}
      >
        <LazyLoadImage alt={hero?.name} src={hero?.image?.url} />
        {isShow && <CardHover hero={hero} image={hero?.image?.url} />}
      </Card>
    </Container>
  )
}
export default CardItem

const Container = styled.div`
  height: 380px;
  img {
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
    filter: sepia(0) saturate(2);
  }
  .badBoy {
    border: 10px solid #ff0000;
  }
  .superhero {
    border: 10px solid #247ba0;
  }
  #card {
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  }
`
