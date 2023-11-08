import styled from "styled-components"

export const Container = styled.div`
height: 47vh;
width: 98.9.1vw;
background-color: rgb(231, 231, 231);
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 768px) { 
flex-direction: column;
height: 100vh;
}
`

export const LogoBW = styled.img`
width: 10vw;
height: 10vh;
@media (max-width: 768px) { 
flex-direction: column;
height: auto;
width: 40vw;
}
@media (min-width: 769px) and (max-width: 1180px) {
width: 25vw;
height: auto;
}
`

export const Adress = styled.p`
font-size: 2vh;
width: 30vw;
padding-top: 2vh;
color: #545454;
display: flex;
@media (max-width: 768px) { 
width: 80vw;
font-size: 1.5vh;
align-items: center;
justify-content: center;
}
@media (min-width: 769px) and (max-width: 1180px) {
font-size: 1.4vh;
margin-bottom: 1.3vh;
}
`
export const SocialMedia = styled.h1`
color: #545454;
font-family: 'Montserrat Classic', sans-serif;
font-size: 2vh;
@media (max-width: 768px) { 
  text-align: center;
  font-size: 1.8vh;
}
@media (min-width: 769px) and (max-width: 1180px) {
font-size: 1.4vh;
}
`

export const SocialMediaText = styled.p`
cursor: pointer;
padding-top: 3vh;
color: #545454;
text-decoration: none;
font-family: 'Montserrat Classic', sans-serif;
font-size: 1.6vh;
@media (max-width: 768px) { 
font-size: 1.3vh;
}
@media (min-width: 769px) and (max-width: 1180px) {
font-size: 1.3vh;
}
`

export const SocialMediaLink = styled.a`
cursor: pointer;
text-decoration: none;

&:hover {
text-decoration: underline;
color: black;
}
@media (max-width: 768px) { 
align-items: center;
justify-content: center;
font-size: 1.5vh;
}
@media (min-width: 769px) and (max-width: 1180px) {
font-size: 1.3
}
`

export const ContainerAdress = styled.div`
display: flex;
flex-direction: column;
@media (max-width: 768px) { 
align-items: center;
justify-content: center;
}
`
export const ContainerSocialMedia= styled.div`
margin-left: 10vh;
@media (max-width: 768px) { 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 0;
margin-top: 13vw;
}@media (min-width: 769px) and (max-width: 1180px) {
margin-left: 5vh;
}

`
export const ContainerUtils = styled.div`
margin-left: 15.5vh;
@media (max-width: 768px) { 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 0;
margin-top: 13vw;
}
@media (min-width: 769px) and (max-width: 1180px) {
margin-left: 5vh;
}
`
export const ContainerUtils2 = styled.div`
margin-left: 18.2vh;
@media (max-width: 768px) { 
display: none;
}
@media (min-width: 769px) and (max-width: 1180px) {
margin-left: 5vh;
}
`