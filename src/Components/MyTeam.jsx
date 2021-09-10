import styled from 'styled-components'
import { useTeam } from '../hooks/useTeam'
import { CardTeam } from './Card/CardTeam'
import { FeaturesTeam } from './Team/FeaturesTeam'

export const MyTeam = () => {
  const { team } = useTeam()

  return (
    <Container>
      <div>
        <h1>My Team</h1>
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
  gap: 1em;
  flex-wrap: wrap;
`
const Container = styled.div`
  text-shadow: 3px 2px 1px black;
  color: white;
  height: auto;
  text-align: left;
  margin-bottom: 3em;
  display: flex;
  justify-content: space-evenly;
`
const ContainerTeam = styled.div`
  display: flex;
  justify-content: left;
  gap: 5px;
`
