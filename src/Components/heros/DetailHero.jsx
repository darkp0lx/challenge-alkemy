import styled from 'styled-components'
import { useGetHero } from '../../hooks/useGetHero'
import { useParams } from 'react-router'
import { Info } from './Info'
export const DetailHero = () => {
  const { id } = useParams()
  const { hero } = useGetHero(id)
  if (hero) {
    return (
      <Container>
        <Info hero={hero} />
        <ContainerBackground>
          <img alt={hero.name} className='detail-img' src={hero?.image?.url} />
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
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
const ContainerBackground = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4em;

  img {
    width: 50%;
    height: 50%;
    object-fit: cover;
    filter: sepia(0) saturate(2);
  }
  @media (min-width: 768px) {
    margin-top: 4em;

    height: 100%;
    width: 60%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  -webkit-box-shadow: inset 0px 80px 32px -26px #5e2129;
  -moz-box-shadow: inset 0px 80px 32px -26px #5e2129;
  box-shadow: inset 0px 80px 32px -26px #5e2129;
  @media (min-width: 768px) {
    -webkit-box-shadow: inset 200px 1px 29px -9px #5e2129;
    -moz-box-shadow: inset 200px 1px 29px -9px #5e2129;
    box-shadow: inset 200px 1px 29px -9px #5e2129;
  }
`
