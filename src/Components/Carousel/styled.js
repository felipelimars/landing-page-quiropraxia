import styled from "styled-components" 
import { Swiper } from 'swiper/react';

export const Image = styled.img`
margin-top: 8vh;
margin-bottom: 6vh;
width: 18vw;
height: auto;
object-fit: cover;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 4px 8px 0px rgba(133, 133, 133, 0.5);
z-index: 3;
@media (min-width: 769px) and (max-width: 1138px) {
  margin-bottom: 0;
}
`

export const SwipperStyled = styled(Swiper)`
width: 75%;
opacity: 0;
transition: opacity 1.5s ease-in-out;
&.visible {
 opacity: 1;
}
`

export const Container = styled.div`
display: flex;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
box-shadow: 0px 4px 8px 0px rgba(133, 133, 133, 0.5);
@media (max-width: 768px) { 
    background-color: #fff;
    display: none;
}
@media (max-width: 820px) and (max-height: 1180px) {
    padding-bottom: 1vh;
}
`


