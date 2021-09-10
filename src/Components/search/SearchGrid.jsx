import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { CardItem } from './CardItem'

export const SearchGrid = ({ films }) => {
  return (
    <Container className='d-flex justify-content-center gap-2 flex-wrap'>
      {films?.map(film => (
        <CardItem film={film} />
      ))}
    </Container>
  )
}
