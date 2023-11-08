import styled, { keyframes } from 'styled-components';


const slideInFromLeft = keyframes`
  from {
    transform: translateX(-20%);
  }
  to {
    transform: translateX(0);
  }
`;
const slideInFromRight = keyframes`
  from {
    transform: translateX(20%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
display: flex;
width: 100%;
height: 79.3vh;
background-color: rgb(28, 89, 109);
padding-top: 21vh;
@media (max-width: 768px) { 
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (min-width: 769px) and (max-width: 1180px) {
height: 55vh;
width: auto;
align-items: center;
justify-content: center;
}
`
export const Doctor = styled.img`
height: 63.3vh;
width: auto;
padding-left: 27vh;
margin-left: 6vh;
padding-top: 16vh;
animation: ${slideInFromLeft} 3s ease-in-out; 
@media (max-width: 768px) {
    padding-left: 0;
    margin-left:  0vh;
    height: 30vh;
    width: auto;
    background-color: rgb(28, 89, 109);
}
@media (min-width: 769px) and (max-width: 1180px) {
height: 36vh;
padding-top: 0;
padding-left: 0;
margin-top: 19vh;
margin-left: 0;
width: auto;
}
`

export const ContainerText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding-bottom: 13vh;
padding-left: 10vh;
animation: ${slideInFromRight} 3s ease-in-out;
@media (max-width: 768px) {
justify-content: center;
align-items: center;
padding-left: 0;
}
`

export const Title = styled.h1`
padding-top: 2vh;
margin-bottom: 3vh;
margin-left: 2vw;
padding-left: 0.5vw;
font-size: 4.5vh;
width: 525px;
height: 20vh;
background-color: #38A2A2;
color: #fff;
font-family: 'Montserrat Classic', sans-serif;
@media (max-width: 768px) { 
padding-left: 1vw;
font-size: 2.5vh;
width: 70vw;
height: 10vh;
margin-top: 4vh;
}
@media (min-width: 769px) and (max-width: 1180px) {
padding-left: 10px;
margin-left: 0;
font-size: 20px;
width: 350px;
height: 10vh;
margin-top: 16vh;
margin-bottom: 2vh;
}
`

export const ButtonQuery = styled.button`
width: 200px;
height: 3vh;
cursor: pointer;
font-size: 2vh;
background-color: transparent;
color: #fff;
position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #fff;
    bottom: 0;
    left: 1;
    transition: width 0.3s ease;
  }
  &:hover::before {
    width: 75%;
  }
  @media (max-width: 768px) { 
  width: 38vw;
  font-size: 1.5vh;
  margin-left: 1vw;
  border-radius: 0.5vh;
  background-color: #fff;
  color: black;
  cursor: pointer;
}
@media (min-width: 769px) and (max-width: 1138px) {
  width: 120px;
  font-size: 12px;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #fff;
    bottom: 1px;
  }&:hover::before {
    width: 105%;
  }
}
`

export const Arrow = styled.p`
  transform: rotate(-45deg);
  position: absolute;
  top: 3px;
  left: 170px;
  @media (max-width: 768px) { 
    left: 92%;
    top: 18%;
    display: none;
  }
  @media (min-width: 769px) and (max-width: 1138px) {
    left: 119px;
    top: 5px;
}
`