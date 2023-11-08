import { LinkForWhatsapp, ContainerText, SubTitle, Title, Container, ButtonContact, Text, Text2, Title2, MissionContainer, Mission, MapContainer } from './styled'
import { useInView } from 'react-intersection-observer';
import { UseButtonContext } from '../../Hooks/useButton';
import { useContext } from 'react';

const SectionAboutUs = () => {
  const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2, });

  const { handleButtonQuestion } = useContext(UseButtonContext)

  return (
    <Container id='sobre-nos' ref={ref}>
        <ContainerText className={inView ? 'visible' : ''}>
          <Title>SOBRE NÓS</Title>
          <SubTitle>Guilherme Kohlrausch dos Santos, quiropraxista, formado pela Universidade Feevale, com foco na prestação de
            atendimento de excelência aos pacientes. Busca contribuir com o
            conhecimento na área afim de beneficiar os pacientes e a equipe.
            Mais de 4 mil atendimentos, realizou atendimentos em Recife e Porto Alegre.</SubTitle>
          <Text>• VII SEMINÁRIO INTERNACIONAL DE QUIROPRAXIA - NEUROLOGIA APLICADA À
            QUIROPRAXIA</Text>
          <Text2>• VIII SEMINÁRIO INTERNACIONAL DE QUIROPRAXIA - AVALIAÇÃO
            MUSCULOESQUELÉTICA</Text2>
          <Title2>MISSÃO E VALORES</Title2>
          <MissionContainer>
          <Mission>Integridade</Mission>
          <Mission>Empatia</Mission>
          <Mission>Compromisso com a excelência</Mission>
          <Mission>Ênfase na prevenção</Mission>
          <Mission>Respeito pela individualidade</Mission>
          <Mission>Educação contínua</Mission>
          <Mission>Ética</Mission>
          <Mission>Equilíbrio e bem-estar</Mission>
          </MissionContainer>
          <LinkForWhatsapp >
          <ButtonContact onClick={handleButtonQuestion}>
          → Entre em contato!
          </ButtonContact>
          </LinkForWhatsapp>
        </ContainerText>
        <MapContainer>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55184.069707163544!2d-50.25233040785261!3d-30.179869523672306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9518107127f9253d%3A0x2427602c334244aa!2sAv.%20Fausto%20Borba%20Prates%2C%203309%20-%20CIDREIRA%2C%20Cidreira%20-%20RS%2C%2095595-000!5e0!3m2!1spt-BR!2sbr!4v1695071113845!5m2!1spt-BR!2sbr" 
        alt="Mapa com localização da clínica"
        width="440" 
        height="555" 
        title="Google Maps localização da clínica" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </MapContainer>
    </Container>
  )
}

export default SectionAboutUs
