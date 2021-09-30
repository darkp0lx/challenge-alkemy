import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { CardHover } from '../Card/CardHover'

export const CardItem = ({ film }) => {
  const [isShow, setIsShow] = useState()

  return (
    <Card
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      style={{ width: '18rem', height: '400px', position: 'relative' }}
      key={film.id}
    >
      <img
        alt={film.name}
        style={{ width: '100%', height: '100%' }}
        src={film?.image?.url}
      />
      {isShow && <CardHover hero={film} image={film?.image?.url} />}
    </Card>
  )
}
