import React from 'react'
import styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'
import { useTeam } from '../../hooks/useTeam'
import { Link } from 'react-router-dom'

export const CardTeam = ({ hero }) => {
  const { deleteToTeam } = useTeam(hero)
  return (
    <Container>
      <Link to={`/heros/${hero.id}`}>
        <img src={hero.image?.url} />
      </Link>
      <ButtonDelete
        title='eliminar del team'
        data-toggle='tooltip'
        data-placement='right'
      >
        <FaTrashAlt onClick={deleteToTeam} className='trash-icon' />
      </ButtonDelete>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  background: red;
  width: 130px;
  height: 180px;
  img {
    width: 100%;
    height: 100%;
  }
`
const ButtonDelete = styled.div`
  width: 25px;
  height: 25px;
  border: 45%;
  background: white;
  color: green;
  position: absolute;
  right: 4px;
  bottom: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    transform: scale(1.1);
  }
  svg {
    :hover {
      transform: rotate(45deg);
      transition: 0.5s ease;
    }
  }
`
