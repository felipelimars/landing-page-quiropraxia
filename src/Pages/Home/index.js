import { useContext } from 'react'
import { Arrow, ButtonQuery, Container, ContainerText, Doctor, Title } from './styled'
import Gui from '../../assets/guiquirobg.png'
import { UseButtonContext } from '../../Hooks/useButton'

const Home = () => {

  const { handleButtonQuery } = useContext(UseButtonContext)

  return (
    <Container id='home'>
      <Doctor src={Gui} alt="Imagem Guilherme Kohralsh quiropraxia"/>
        <ContainerText>
        <Title>Recupere o seu bem estar com a quiropraxia.</Title>
        <ButtonQuery onClick={handleButtonQuery}>
          Agende sua consulta <Arrow>➔</Arrow>
        </ButtonQuery>
        </ContainerText>
    </Container>
  )
}

export default Home
