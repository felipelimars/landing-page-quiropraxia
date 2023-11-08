import styled from "styled-components"
import { FaUserAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: rgb(231, 231, 231);
position: relative;
`

export const Image = styled.img`
width: auto;
height: 100%;
position: absolute;
left: -25vw;
transform: scaleX(-1);
@media (max-width: 768px) { 
    height: auto;
    width: 100%;
    left: 0;
}
@media (min-width: 769px) and (max-width: 1180px) {
width: 80vw;
height: 100%;
}
`

export const Title = styled.h1`
padding-bottom: 14vh;
margin-top: 10vh;
font-size: 3.5vh;
margin-right: 2vw;
font-family: 'Montserrat Classic', sans-serif;
@media (max-width: 768px) { 
    font-size: 2.4vh;
    margin-left: 0vw;
} 
@media (max-width: 896px) { 
    font-size: 2.4vh;
    margin-left: 4.5vw;
}
@media (min-width: 769px) and (max-width: 1180px) {
font-size: 2vh;
margin-right: 5vw;
}
`

export const TextContainer = styled.div`
width: 45vw;
height: 100vh;
position: absolute;
right: 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media (max-width: 768px) { 
width: 100vw;
}

`
export const InputStyle = styled.input`
width: 35.9vw;
background-color: transparent;
font-size: 2vh;
outline: none;
font-family: 'Montserrat Classic', sans-serif;
border-bottom: transparent;
@media (max-width: 768px) { 
    width: 100%;
    font-size: 1.6vh;
}
@media (min-width: 769px) and (max-width: 1180px) {
font-size: 1.4vh;
}
`

export const TextStyle = styled.textarea`
width: 35vw;
height: 20vh;
border: 1px solid gray;
background-color: transparent;
margin-top: 3vh;
border-radius: 1vh;
padding: 1vh 1vh;
font-family: 'Montserrat Classic', sans-serif;
resize: none;
@media (max-width: 768px) {
    width: 70vw;
    font-size: 1.4vh;
    margin-left: 0vw;
    margin-right: 1vw;
}
@media (min-width: 769px) and (max-width: 1180px) {
height: 15vh;
margin-top: 2vh;
}
`

export const IconUser = styled(FaUserAlt)`
    font-size: 2.5vh;
    padding-right: 1vw;
    margin-bottom: 0.5vh;
    @media (min-width: 769px) and (max-width: 1180px) {
    font-size: 2vh;
    }
`
export const IconEmail = styled(AiTwotoneMail)`
    font-size: 2.7vh;
    padding-right: 1vw;
    margin-bottom: 0.5vh;
    @media (min-width: 769px) and (max-width: 1180px) {
    font-size: 2vh;
    }
`
export const IconPhone = styled(BsFillTelephoneFill)`
    font-size: 2.7vh;
    padding-right: 1vw;
    margin-bottom: 0.5vh;
    @media (min-width: 769px) and (max-width: 1180px) {
    font-size: 2vh;
    }
`

export const Button = styled.button`
width: 36.2vw;
margin-top: 1vh;
height: 5vh;
background-color: rgb(28, 89, 109);
color: #fff;
border-radius: 1vh;
cursor: pointer;
&:hover{
background-color: rgb(9, 46, 57);
transition: background-color 0.5s ease; 
}@media (max-width: 768px) { 
    width: 75vw;
    font-size: 2vh;
    margin-left: 0vw;
}
@media (min-width: 769px) and (max-width: 1180px) {
    height: 4vh;
}
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding-bottom: 1vh;
  width: 35.9vw;
  margin-bottom: 10px;
  &:hover {
    border-bottom: 1.5px solid rgb(1, 94, 204);
    }
    @media (max-width: 768px) { 
    width: 74vw;
    margin-left: 0vw;
    } 
`;
