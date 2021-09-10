import styled from 'styled-components'
import { GiBootStomp, GiBrain, GiBroadsword, GiStrong } from 'react-icons/gi'
import { useGetHero } from '../../hooks/useGetHero'
import { RiBatteryChargeFill } from 'react-icons/ri'
import { ImPower } from 'react-icons/im'
import { useParams } from 'react-router'
import { Info } from './Info'
export const DetailHero = () => {
  const { id } = useParams()
  const { hero } = useGetHero(id)
  console.log(hero, 'my hero')
  if (hero) {
    return (
      <Container>
        <Info hero={hero} />
        <ContainerBackground>
          <img className='detail-img' src={hero?.image?.url} />
          <Overlay></Overlay>
        </ContainerBackground>
      </Container>
    )
  } else {
    return <h2>hero no encontrado! </h2>
  }
}

const Container = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
`
const ContainerBackground = styled.div`
  position: relative;
  height: 100vh;
  width: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: sepia(0) saturate(2);
  }
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  -webkit-box-shadow: inset 200px 1px 29px -9px #5e2129;
  -moz-box-shadow: inset 200px 1px 29px -9px #5e2129;
  box-shadow: inset 200px 1px 29px -9px #5e2129;
`
