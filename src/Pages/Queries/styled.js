import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  @media (max-width: 768px) { 
    flex-direction: column-reverse;
  } 
`

export const ContainerText = styled.div`
display: flex;
flex-direction: column;
margin-right: 10.1vw;
@media (max-width: 768px) { 
  align-items: center;
  margin-right: 0;
} 
`

export const SubTitle = styled.p`
  width: 30vw;
  font-family: 'Montserrat Classic', sans-serif;  
  text-align: left;
  text-decoration: none; 
  position: relative;
  color: #545454;
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
    width: 82%;
  }
  @media (max-width: 768px) { 
  width: 100vw;
  display: none;
}
@media (min-width: 769px) and (max-width: 1138px) {
  width: 45vw;
  font-size: 1.5vh;
}
`;

export const SubTitle2 = styled.p`
  padding-left: 1.4vw;
  padding-bottom: 4vh;
  width: 40vw;
  font-family: 'Montserrat Classic', sans-serif;  
  text-align: left;
  font-weight: bold;
  color: rgb(28, 89, 109);
  @media (max-width: 768px) {
  text-align: center;
  padding-left: 0;
  padding-bottom: 0;
  margin-bottom: 3vh;
  width: 80vw;
  font-size: 1.8vh;
}
@media (min-width: 769px) and (max-width: 1138px) {
  font-size: 1.5vh;
}
`;

export const Title = styled.h1`
padding-left: 1.4vw;
margin-bottom: 7vh;
font-size: 5.5vh;
width: 10.7vw;
font-size: 3.5vh;
font-family: 'Montserrat Classic', sans-serif;
@media (max-width: 768px) { 
display: none;
}
@media (min-width: 769px) and (max-width: 1138px) {
  font-size: 2.5vh;
}
`

export const ButtonQuery = styled.button`
margin-left: 1.4vw;
width: 13vw;
height: 5vh;
margin-top: 2vw;
border-radius: 1vh;
background-color: rgb(28, 89, 109);
color: white;
cursor: pointer;
&:hover{
background-color: rgb(9, 46, 57);
transition: background-color 0.5s ease; 
}
@media (max-width: 768px) { 
  width: 40vw;
  height: 4vh;
  font-size: 1.5vh;
  border-radius: 0.5vh;
  margin-left: 0;
}
@media (min-width: 769px) and (max-width: 1138px) {
  width: 18vh;
  height: 3vh;
  font-size: 1.3vh;
  margin-top: 4vh;
}
`

export const VideoQuiro = styled.video`
margin-top: 12vh;
@media (max-width: 768px) { 
  width: 45vw;
  height: 55vh;
  margin-top: 8vh;
  margin-bottom: 3vh;
}
@media (min-width: 769px) and (max-width: 1138px) {
  width: 22vw;
  height: 40vw;
  margin-top: 0vh;
}
`