import styled from "styled-components"
import { BsInstagram, BsYoutube, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

export const Container = styled.div`
width: 98vw;
height: 9.5vh;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 768px) { 
background-color: #fff;
width: 100%;
flex-direction: column;
padding-bottom: 19.5vw
}
`

export const LogoDev = styled.img`
height: 9vh;
margin-right: 11vw;
cursor: pointer;
@media (max-width: 768px) { 
height: 7vh;
margin-right: 0vw;
padding-bottom:
}
@media (min-width: 769px) and (max-width: 1180px) {
height: 5vh;
}
`

export const ContainerIcons = styled.div`
margin-left: 12.9vw;
display: flex;
column-gap: 2vw;
@media (max-width: 768px) { 
margin-left: 1vw; 
margin-top: 4vh;
margin-bottom: 2vh;
} 
`

export const IconInstagram = styled(BsInstagram)`
font-size: 2.5vh;
cursor: pointer;
color: #545454;
&:hover{
color: black;
}
@media (max-width: 768px) { 
font-size: 2.5vh;
}
@media (min-width: 769px) and (max-width: 1180px) {
font-size: 2vh
}
`
export const IconFacebook = styled(FaFacebookF)`
font-size: 2.5vh;
cursor: pointer;
color: #545454;
&:hover{
color: black;
}
@media (max-width: 768px) { 
font-size: 2.4vh;
margin-left: 10vw; 
}
@media (min-width: 769px) and (max-width: 1180px) {
font-size: 2vh
}
`
export const IconWhatsapp = styled(BsWhatsapp)`
font-size: 2.5vh;
cursor: pointer;
color: #545454;
&:hover{
color: black;
}
@media (max-width: 768px) { 
font-size: 2.2vh;
margin-left: 10vw; 
}
@media (min-width: 769px) and (max-width: 1180px) {
font-size: 2vh
}
`
export const IconYoutube = styled(BsYoutube)`
font-size: 2.5vh;
cursor: pointer;
color: #545454;
&:hover{
color: black;
}
@media (max-width: 768px) { 
font-size: 2.5vh;
margin-left: 10vw; 
}
@media (min-width: 769px) and (max-width: 1180px) {
font-size: 2vh
}
`

export const TextCopyright = styled.div`
font-size: 1.7vh;
font-family: 'Montserrat Classic', sans-serif;
color: #545454;
@media (max-width: 768px) { 
font-size: 1.3vh;
}
@media (min-width: 769px) and (max-width: 1180px) {
font-size: 1.0vh
} 
`

export const Link = styled.a`
width: 1px;
`