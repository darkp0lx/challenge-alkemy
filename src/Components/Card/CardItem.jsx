import { useState } from 'react'

import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { CardHover } from './CardHover'
import { useTeam } from '../../hooks/useTeam'
import { useGetHero } from '../../hooks/useGetHero'

export const CardItem = ({ id }) => {
  const { hero } = useGetHero(id)
  const [isShow, setIsShow] = useState()
  const { isTeam } = useTeam(hero)
  return (
    <Container>
      <Card
        id='card'
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
        style={{ width: '18rem', height: '100%', position: 'relative' }}
        key={id}
        className={`${isTeam()}`}
      >
        <img src={hero?.image?.url} />
        {isShow && <CardHover hero={hero} image={hero?.image?.url} />}
      </Card>
    </Container>
  )
}

const Container = styled.div`
  height: 380px;
  img {
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
    filter: sepia(0) saturate(2);
  }
  .true {
    border: 2px solid red;
  }
  #card {
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  }
`
