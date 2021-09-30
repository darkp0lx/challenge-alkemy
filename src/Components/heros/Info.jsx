import styled from 'styled-components'
import React, { useState } from 'react'
import { GiBootStomp, GiBrain, GiBroadsword, GiStrong } from 'react-icons/gi'
import { ImPower } from 'react-icons/im'
import { RiBatteryChargeFill } from 'react-icons/ri'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { useTeam } from '../../hooks/useTeam'
export const Info = ({ hero }) => {
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
    <InfoC>
      <InfoContainer>
        <InfoHero>
          <h2>{hero?.name}</h2>
          <h4>
            categoria:{' '}
            {hero.biography.alignment === 'bad' ? 'Villano' : 'Heroe'}
          </h4>
          <h4>
            raza:{' '}
            {hero.appearance.race === 'null'
              ? 'desconocido'
              : hero.appearance.race}
          </h4>
          <h4>Color de ojos: {hero.appearance['eye-color']}</h4>
          <h4>color de cabello:{hero.appearance['hair-color']}</h4>
          <h4>altura: {hero.appearance.height[1]}</h4>
          <h4>peso: {hero.appearance.weight[1]}</h4>
          <h4>Compania: {hero.biography.publisher}</h4>
          <h4>trabajo:{hero.work.occupation}</h4>
          <h4>alias:{hero.biography?.aliases[0]}</h4>
        </InfoHero>
        <Skills>
          <ul>
            skills
            <li>
              <span>
                <GiBroadsword style={{ color: 'red' }} />
                combat:
              </span>
              <span>{hero?.powerstats?.combat}</span>
            </li>
            <li>
              <span>
                <RiBatteryChargeFill style={{ color: 'green' }} />
                durability:
              </span>
              <span>{hero?.powerstats?.durability}</span>
            </li>
            <li>
              <span>
                <GiBrain style={{ color: 'blue' }} />
                intelligence:
              </span>
              <span>{hero?.powerstats?.intelligence}</span>
            </li>
            <li>
              <span>
                <ImPower style={{ color: 'yellow' }} />
                power:
              </span>
              <span>{hero?.powerstats?.power}</span>
            </li>
            <li>
              <span>
                <GiBootStomp style={{ color: 'purple' }} />
                speed:
              </span>
              <span>{hero?.powerstats?.speed}</span>
            </li>
            <li>
              <span>
                <GiStrong style={{ color: 'orange' }} />
                strength:
              </span>
              <span>{hero?.powerstats?.strength}</span>
            </li>
          </ul>
        </Skills>
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
      </InfoContainer>
    </InfoC>
  )
}
const InfoC = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 50%;
    margin-top: 6em;
  }
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #5e2129;
  justify-content: space-evenly;
  align-items: space-evenly;
  border: 1px solid white;
  background: white;
  padding: 1.5em;
  width: 95%;
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  h2 {
    text-align: center;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    h2 {
      font-size: 60px;
      text-shadow: 1px 2px black;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    text-align: left;
    svg {
      margin-right: 4px;
    }
  }
  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
`
const InfoHero = styled.div`
  text-align: left;
  h4 {
    font-size: 1em;
    margin-bottom: 0.2em !important;
  }
`
const Skills = styled.div`
  width: 100%;
`
