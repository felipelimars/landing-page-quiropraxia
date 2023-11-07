import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 5vh;
@media (max-width: 768px) { 
flex-direction: column;
}
@media (min-width: 769px) and (max-width: 1180px) {
  flex-direction: column-reverse;
}
`

export const MapContainer = styled.div`
  margin-top: 10vh;
  @media (max-width: 768px) { 
    width: 100vw;
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1180px) {
    display: none;
  }
`;


export const ContainerText = styled.div`
display: flex;
flex-direction: column;
padding-right: 2vh;
padding-bottom: 6vh;
opacity: 0;
transition: opacity 1.5s ease-in-out;
  
&.visible {
 opacity: 1;
}
@media (max-width: 768px) { 
padding-right: 0;
background-color: #fff;
align-items: center;
padding-bottom: 0vh;
}
@media (min-width: 769px) and (max-width: 1180px) {
align-items: center;
padding-right: 0;
}
`

export const Title = styled.h1`
margin-bottom: 5vh;
margin-top: 7vh;
font-size: 3.5vh;
font-family: 'Montserrat Classic', sans-serif;
@media (max-width: 768px) { 
background-color: #fff;
font-size: 2.0vh;
padding-top: 0vh;
margin-bottom: 2vh;
}
@media (min-width: 769px) and (max-width: 1180px) {
font-size: 3vh;
margin-top: 7vh;
padding-top: 20vh;
}
`

export const SubTitle = styled.p`
width: 40vw;
font-family: 'Montserrat Classic', sans-serif;
text-align: left;
margin-top: 3vh;
color: #545454;
@media (max-width: 768px) { 
width: 80vw;
background-color: #fff;
font-size: 2vh;
margin-top: 0vh;
}
@media (min-width: 769px) and (max-width: 1180px) {
width: 76vw;
font-size: 1.6vh;
}
`

export const Text = styled.p`
width: 40vw;
font-family: 'Montserrat Classic', sans-serif;
font-size: 1.3vh;
font-weight: bold;
text-align: left;
padding-top: 1vh;
margin-top: 2vh;
color: #545454;
@media (max-width: 768px) { 
padding-top: 0;
width: 80vw;
background-color: #fff;
}
@media (min-width: 769px) and (max-width: 1180px) {
width: 77vw;
}
`
export const Text2 = styled.p`
width: 40vw;
font-family: 'Montserrat Classic', sans-serif;
font-size: 1.3vh;
font-weight: bold;
text-align: left;
padding-top: 1vh;
color: #545454;
@media (max-width: 768px) { 
width: 80vw;
background-color: #fff;
}
@media (min-width: 769px) and (max-width: 1180px) {
width: 77vw;
}
`
export const ButtonContact = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2vh;
  font-weight: bold;
  text-decoration: none; 
  position: relative;
  cursor: pointer;
  margin-top: 8.5vh;
  margin-right: 32vw;
  
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    background-color: black; 
    bottom: 0;
    left: 0;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }
  @media (max-width: 768px) { 
  display: none;
  }
  @media (min-width: 769px) and (max-width: 1180px) {
  display: none;
  }

`;

export const LinkForWhatsapp = styled.a`
width: auto;
height: 2vh;
`

export const Title2 = styled.h1`
margin-top: 7vh;
padding-bottom: 8vh;
font-size: 3.5vh;
font-family: 'Montserrat Classic', sans-serif;
@media (max-width: 768px) { 
background-color: #fff;
font-size: 2vh;
margin-top: 5vh;
padding-bottom: 0;
margin-bottom: 2vh;
}
@media (min-width: 769px) and (max-width: 1180px) {
font-size: 3vh;
margin-top: 10vh;
}
`

export const MissionContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 40vw;
margin-bottom: 4vh;
@media (max-width: 768px) { 
width: 95vw;
background-color: #fff;
align-items: center;
justify-content: center;
flex-direction: column-reverse;
padding-bottom: 0vh;
margin-bottom: 0vh;
}
@media (min-width: 769px) and (max-width: 1180px) {
align-items: center;
justify-content: center;
margin-bottom: 1vh;
padding-bottom: 2vh;
width: 98vw;

}
`
export const Mission = styled.div`
font-family: 'Montserrat Classic', sans-serif;
font-size: 2vh;
background-color: rgb(60, 162, 162);
color: #fff;
margin: 0.5vh;
padding: 0.5vw;
display: flex;
@media (max-width: 768px) { 
width: 80vw;
align-items: center;
justify-content: center;
}
@media (min-width: 769px) and (max-width: 1180px) {
width: 75vw;
align-items: center;
justify-content: center;
font-size: 1.5vh;
}
`
