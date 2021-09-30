import styled from 'styled-components'

import { CardTeam } from './Card/CardTeam'
import { useTeam } from '../hooks/useTeam'
import { useStats } from '../hooks/useStats'
import { FeaturesTeam } from './Team/FeaturesTeam'

export const MyTeam = () => {
  const { team } = useTeam()
  const { getStatMajor } = useStats(team)
  const bestStats = getStatMajor()[0]
  return (
    <Container>
      <div>
        {bestStats[1] === 0 ? (
          ''
        ) : (
          <h1>{`team of ${bestStats[0]}:${bestStats[1]}`}</h1>
        )}
        <ContainerTeam>
          {team.length === 0 ? (
            <h2>no tiene integrantes! agregue alguno!</h2>
          ) : (
            <ContainerTeamHero>
              {team?.map(hero => (
                <CardTeam hero={hero} />
              ))}
            </ContainerTeamHero>
          )}
        </ContainerTeam>
      </div>
      <FeaturesTeam team={team} />
    </Container>
  )
}
const ContainerTeamHero = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  flex-wrap: wrap;
`
const Container = styled.div`
  margin-top: 2em;
  text-shadow: 3px 2px 1px black;
  color: white;
  height: 550px;
  text-align: left;
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 768px) {
    margin-top: 7em;
  }
  @media (min-width: 1024px) {
    margin-top: 10em;
  }
`
const ContainerTeam = styled.div`
  display: flex;
  justify-content: left;
  gap: 5px;
`
