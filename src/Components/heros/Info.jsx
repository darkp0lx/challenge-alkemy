import React from 'react'
import { GiBootStomp, GiBrain, GiBroadsword, GiStrong } from 'react-icons/gi'
import { ImPower } from 'react-icons/im'
import { RiBatteryChargeFill } from 'react-icons/ri'
import styled from 'styled-components'
export const Info = ({ hero }) => {
  return (
    <InfoC>
      <InfoContainer>
        <InfoHero>
          <h2>{hero?.name}</h2>
          <h3>categoria: {hero.biography.alignment}</h3>
          <h4>raza: {hero.appearance.race}</h4>
          <h4>Color de ojos: {hero.appearance['eye-color']}</h4>
          <h4>altura: {hero.appearance.height[1]}</h4>
          <h4>Compania: {hero.biography.publisher}</h4>
          <h4>trabajo:{hero.work.occupation}</h4>
        </InfoHero>
        <Skills>
          <ul>
            skills
            <li>
              <GiBroadsword style={{ color: 'red' }} />
              combat:{hero?.powerstats?.combat}
            </li>
            <li>
              <RiBatteryChargeFill style={{ color: 'green' }} />
              durability:{hero?.powerstats?.durability}
            </li>
            <li>
              <GiBrain style={{ color: 'blue' }} />
              intelligence:{hero?.powerstats?.intelligence}
            </li>
            <li>
              <ImPower style={{ color: 'yellow' }} />
              power:{hero?.powerstats?.power}
            </li>
            <li>
              <GiBootStomp style={{ color: 'purple' }} />
              speed:{hero?.powerstats?.speed}
            </li>
            <li>
              <GiStrong style={{ color: 'orange' }} />
              strength:{hero?.powerstats?.strength}
            </li>
          </ul>
        </Skills>
      </InfoContainer>
    </InfoC>
  )
}
const InfoC = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  padding: 0 1em;
  width: 95%;
  height: 400px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

  h2 {
    font-size: 60px;
    text-shadow: 1px 2px black;
  }
  ul {
    text-align: left;
    svg {
      margin-right: 4px;
    }
  }
  li {
    list-style: none;
  }
`
const InfoHero = styled.div`
  text-align: left;
`
const Skills = styled.div``
