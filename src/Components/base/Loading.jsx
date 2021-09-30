import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loading = () => {
  return (
    <Spinner variant='light' animation='border' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  )
}
