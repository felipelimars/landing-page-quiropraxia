import Thumbnail from '../../assets/thumb.png'
import Video from '../../assets/video.mp4'
import { Container, ContainerText, SubTitle, Title, ButtonQuery, SubTitle2, VideoQuiro } from './styled'
import { useContext } from 'react'
import { UseButtonContext } from '../../Hooks/useButton'

const Queries = () => {
            
    const { handleButtonQuery } = useContext(UseButtonContext)

      
    return (
        <Container id='consultas'>
            <ContainerText>
                <Title>CONSULTAS</Title>
                <SubTitle2>Agende uma consulta de quiropraxia e libere o poder da sua saúde e bem-estar através do cuidado especializado da coluna vertebral.</SubTitle2>
                <SubTitle>→ Agende sua consulta hoje mesmo!</SubTitle>
                <SubTitle>→ Nossos serviços de consulta à sua disposição.</SubTitle>
                <SubTitle>→ Confie em nossa equipe para cuidar de você.</SubTitle>
            <ButtonQuery onClick={handleButtonQuery}>
          Agendar consulta
        </ButtonQuery>
        </ContainerText>
            <VideoQuiro
                alt="Video com sessões de Quiropraxia."
                src={Video}
                width="314"
                height="555"
                poster={Thumbnail}
                autoPlay={false}
                muted={true}
                loop={true}
                controls={true}
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
            />
        </Container>
    )
}

export default Queries
