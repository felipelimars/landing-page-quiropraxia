import styled from "styled-components" 
import { Swiper } from 'swiper/react';

export const Container = styled.div`
display: flex;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 768px) { 
background-color: #fff;
display: none;
}
@media (min-width: 769px) and (max-width: 1180px) {
display: none;
}
`
export const Card = styled.div`
display: flex;
align-items: center;
margin-top: 1vh;
margin-left: 1vh;
display: flex;
justify-content: space-between;
flex-direction: column;
width: 18vw;
height: 37vh;
border-radius: 10px;
cursor: grab;
box-shadow: 0px 4px 8px 0px rgba(133, 133, 133, 0.5);
opacity: 0;
transition: opacity 1.5s ease-in-out;
  
&.visible {
 opacity: 1;
}
`
export const Image = styled.img`
width: 6vw;
height: auto;
object-fit: cover;
display: flex;
align-items: center;
justify-content: center;
cursor: grab;
margin-top: 3vh;
`

export const Googlerev = styled.p`
font-size: 2vh;
color: silver;
`

export const SwipperStyled = styled(Swiper)`
width: 75%;
height: 45vh;
margin-bottom: 5vh;
opacity: 0;
transition: opacity 1.5s ease-in-out;
  
&.visible {
 opacity: 1;
}
`

export const Text = styled.p`
font-size: 1vw;
font-family: 'Montserrat Classic', sans-serif;
font-weight: bold;
line-height: 3vh;
text-align: center;
width: 90%;
color: #545454;
`

export const SubText = styled.h1`
font-family: 'Montserrat Classic', sans-serif;
color: #545454;
font-size: 1.0vw;
margin-bottom: 5vh;
`



