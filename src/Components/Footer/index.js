import LogoFelipe from '../../assets/felipedev.png'
import { Container, ContainerIcons, IconFacebook, IconInstagram, IconWhatsapp, IconYoutube, LogoDev, TextCopyright } from './styled';


const Footer = () => {
  return (
    <Container>
      <ContainerIcons>
        <a href="https://www.instagram.com/guilhermeksquiro/" target="blank">
        <IconInstagram/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089595039078" target="blank">
        <IconFacebook/>
        </a>
        <a href='https://api.whatsapp.com/send/?phone=5551980388264&type=phone_number&app_absent=0' target="blank">
        <IconWhatsapp/>
        </a>
        <a href='https://www.youtube.com/channel/UCCnwHYTRIxvmjkb4rw6AL-A' target="blank">
        <IconYoutube/>
        </a>
      </ContainerIcons>
      <TextCopyright>
        Copyright © 2023 | Guilherme Dos Santos Quiropraxia ®
      </TextCopyright>
      <div>
        <a href="https://www.linkedin.com/in/felipelimars/" target="blank">
        <LogoDev src={LogoFelipe} alt="Logo FelipeLimaDev"/>
        </a>
      </div>
    </Container>
  )
}
export default Footer
