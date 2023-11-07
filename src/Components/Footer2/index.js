import { Adress, Container, ContainerAdress, ContainerSocialMedia, ContainerUtils, ContainerUtils2, LogoBW, SocialMedia, SocialMediaLink, SocialMediaText } from "./styled"
import LogoTransparent from "../../assets/logotransparent.png"

const Footer2 = () => {
  return (
    <Container>
<ContainerAdress>
    <LogoBW src={LogoTransparent} alt="Logo transparent"/>
    <Adress>
    Cidreira RS - Brasil - CEP 95595-000</Adress>
    <Adress>
    Av. Fausto Borba Prates, 3309 - Centro
    </Adress>
    <Adress>
    E-mail: contato@guilhermequiro.com.br 
    </Adress>
    <Adress>
    Telefone: (51) 980388264    
    </Adress>
</ContainerAdress>
<ContainerSocialMedia>
    <SocialMedia>REDES SOCIAIS</SocialMedia>
    <SocialMediaLink href="https://www.instagram.com/guilhermeksquiro" target="blank"><SocialMediaText>INSTAGRAM</SocialMediaText></SocialMediaLink>
    <SocialMediaLink><SocialMediaText>YOUTUBE</SocialMediaText></SocialMediaLink>
    <SocialMediaLink href="https://api.whatsapp.com/send/?phone=5551980388264&type=phone_number&app_absent=0" target="blank"><SocialMediaText>WHATSAPP</SocialMediaText></SocialMediaLink>
    <SocialMediaLink href="https://www.facebook.com/profile.php?id=100089595039078" target="blank"><SocialMediaText>FACEBOOK</SocialMediaText></SocialMediaLink>
</ContainerSocialMedia>
<ContainerUtils2>
    <SocialMedia>MENU</SocialMedia>
    <SocialMediaLink href="https://api.whatsapp.com/send/?phone=5551980388264&type=phone_number&app_absent=0" target="blank"><SocialMediaText>INSTITUCIONAL</SocialMediaText></SocialMediaLink>
    <SocialMediaLink href="https://api.whatsapp.com/send/?phone=5551980388264&type=phone_number&app_absent=0" target="blank"><SocialMediaText>REPRESENTANTE</SocialMediaText></SocialMediaLink>
    <SocialMediaLink href="https://api.whatsapp.com/send/?phone=5551980388264&type=phone_number&app_absent=0" target="blank"><SocialMediaText>FALE CONOSCO</SocialMediaText></SocialMediaLink>
    <SocialMediaLink href="https://api.whatsapp.com/send/?phone=5551980388264&type=phone_number&app_absent=0" target="blank"><SocialMediaText>PERGUNTAS</SocialMediaText></SocialMediaLink>
</ContainerUtils2>
<ContainerUtils>
    <SocialMedia>LINKS ÚTEIS</SocialMedia>
    <SocialMediaLink href="https://api.whatsapp.com/send/?phone=5551980388264&type=phone_number&app_absent=0" target="blank"><SocialMediaText>CONSULTAS</SocialMediaText></SocialMediaLink>
    <SocialMediaLink href="https://api.whatsapp.com/send/?phone=5551980388264&type=phone_number&app_absent=0" target="blank"><SocialMediaText>ATENDIMENTO</SocialMediaText></SocialMediaLink>
    <SocialMediaLink href="https://api.whatsapp.com/send/?phone=5551980388264&type=phone_number&app_absent=0" target="blank"><SocialMediaText>DÚVIDAS</SocialMediaText></SocialMediaLink>
    <SocialMediaLink href="https://api.whatsapp.com/send/?phone=5551980388264&type=phone_number&app_absent=0" target="blank"><SocialMediaText>CONTATO</SocialMediaText></SocialMediaLink>
</ContainerUtils>
</Container>
)}

export default Footer2
