import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import styled from 'styled-components'

import { RadarChart } from '../RadarChart'
import { useTeam } from '../../hooks/useTeam'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const CardHover = ({ hero }) => {
  const {
    addToTeam,
    deleteToTeam,
    isTeam,
    isHero,
    teamHeros,
    teamBadBoys
  } = useTeam(hero)
  const [alignment, setAlignment] = useState(isHero() ? true : false)

  const numberOfHeros = teamHeros().length
  const numberOfBadBoys = teamBadBoys().length

  console.log(hero, numberOfHeros, numberOfBadBoys, alignment)
  AOS.init()

  const disablerButton = () => {
    if (alignment === true && numberOfHeros == 3) {
      return true
    } else if (numberOfBadBoys == 3) {
      return true
    } else {
      return false
    }
  }

  console.log(disablerButton())
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
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  .buttonsHover {
    .btn-dark {
      margin-right: 10px;
    }
  }
`
