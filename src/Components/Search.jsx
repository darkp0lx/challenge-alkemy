import axios from 'axios'
import { useState } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

import { actionTypes } from '../Store/reducer'
import { useStateValue } from '../Store/StateProvider'

export const Search = () => {
  const [inputSearch, setInputSearch] = useState()
  const [{ data }, dispatch] = useStateValue()

  const onSubmit = e => {
    setInputSearch(e.target.value)
  }
  const setData = () => {
    axios
      .get(
        `https://superheroapi.com/api/3741049589297474/search/${inputSearch}`
      )
      .then(res => {
        dispatch({
          type: actionTypes.SEARCH_HERO,
          data: res.data.results
        })
      })
      .catch(e => console.log(e))
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      axios
        .get(
          `https://superheroapi.com/api/3741049589297474/search/${inputSearch}`
        )
        .then(res => {
          dispatch({
            type: actionTypes.SEARCH_HERO,
            data: res.data.results
          })
        })
    }
  }

  return (
    <InputGroup
      size='sm'
      className='mt-3 mb-3 mx-auto'
      style={{ width: '50%' }}
    >
      <FormControl
        onChange={e => onSubmit(e)}
        onKeyDown={handleKeyDown}
        aria-label='Small'
        aria-describedby='inputGroup-sizing-sm'
      />
      <button
        style={{ zIndex: 0 }}
        type='button'
        onClick={setData}
        className='btn btn-dark'
      >
        buscar
      </button>
    </InputGroup>
  )
}
