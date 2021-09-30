import 'aos/dist/aos.css' // You can also use <link> for styles

import AOS from 'aos'
import { useState } from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { RadarChart } from '../RadarChart'
import { useTeam } from '../../hooks/useTeam'
import { IoIosAddCircleOutline } from 'react-icons/io'

export const CardHover = ({ hero }) => {
  const {
    addToTeam,
    deleteToTeam,
    isTeam,
    isHero,
    teamHeros,
    teamBadBoys
  } = useTeam(hero)
  const [alignment] = useState(isHero() ? true : false)
  const numberOfHeros = teamHeros().length
  const numberOfBadBoys = teamBadBoys().length

  AOS.init()

  const disablerButton = () => {
    if (alignment === true && numberOfHeros === 3) {
      return true
    } else if (numberOfBadBoys === 3) {
      return true
    } else {
      return false
    }
  }

  return (
    <Container data-aos='flip-left'>
      <h2>{hero?.name}</h2>
      <RadarChart skills={hero && hero.powerstats} />
      <div className='buttonsHover'>
        <button type='button' className='btn btn-dark'>
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            to={`/heros/${hero?.id}`}
          >
            Mas Info
          </Link>
        </button>
        {!isTeam() ? (
          <button
            disabled={disablerButton()}
            onClick={addToTeam}
            type='button'
            className='btn btn-success'
          >
            agregar al team
            <IoIosAddCircleOutline size={25} />
          </button>
        ) : (
          <button
            onClick={deleteToTeam}
            type='button'
            className='btn btn-danger'
          >
            quitar del team
            <IoIosAddCircleOutline size={25} />
          </button>
        )}
      </div>
    </Container>
  )
}
const Container = styled.div`
  padding: 1em;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  h2 {
    text-align: center;
  }

  .buttonsHover {
    margin-top: 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    button {
      width: auto;
      font-size: 0.8em;
      height: 30px;
      display: flex;
      align-items: center;
    }
    .btn-dark {
      margin-right: 5px;
    }
  }
  @media (min-width: 768px) {
    .buttonsHover {
      margin-top: 1em;
      display: flex;
      justify-content: space-around;
      width: 100%;

      button {
        width: auto;
        font-size: 0.8em;
        height: 40px;
      }
      .btn-dark {
        margin-right: 5px;
      }
    }
  }
`
