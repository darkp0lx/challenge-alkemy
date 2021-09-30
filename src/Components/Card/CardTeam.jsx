import React from 'react'
import styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'
import { useTeam } from '../../hooks/useTeam'
import { Link } from 'react-router-dom'

export const CardTeam = ({ hero }) => {
  const { deleteToTeam } = useTeam(hero)
  return (
    <Container>
      <h3>{hero.name}</h3>
      <Link to={`/heros/${hero.id}`}>
        <img alt={hero.name} src={hero.image?.url} />
      </Link>
      <ButtonDelete
        title='eliminar del team'
        data-toggle='tooltip'
        data-placement='right'
      >
        <FaTrashAlt
          style={{ cursor: 'pointer' }}
          onClick={deleteToTeam}
          className='trash-icon'
        />
      </ButtonDelete>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 70px;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
    :hover {
      -webkit-transform: scale(1.05);
      transform: scale(1.05);
      transition: all 0.5s ease;
    }
  }
  h3 {
    font-size: 0.5em;
    margin-bottom: 0.5em;
    text-align: center;
  }
  @media (min-width: 768px) {
    width: 130px;
    height: auto;
    h3 {
      font-size: 0.8em;
    }
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
  bottom: -15px;
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
