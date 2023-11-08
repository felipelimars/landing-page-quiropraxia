import styled from "styled-components"
import { MdEmail} from "react-icons/md"

export const Logo1 = styled.img`
width: auto;
height: 12vh;
margin-left: 2vh;
cursor: pointer;
@media (max-width: 768px) { 
    padding-left: 0;
    margin-left: 3vw;
    margin-top: 3vh;
}
`

export const Container = styled.header`
height: 18vh;
display: flex;
justify-content: space-between; 
align-items: center;
background-color: #ffff; 
padding: 10px;
transition: height 0.3s;
position: fixed;
width: 100%;
z-index: 100; 
box-shadow: 0px 4px 8px 0px rgba(133, 133, 133, 0.5);
@media (max-width: 768px) { 
    padding-bottom: 4vh;
}
`;

export const SectionContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 4vh;
font-size: 2vh;
font-weight: bold;
font-family: 'Montserrat Classic', sans-serif;
color: rgb(28, 89, 109);
transition: color 5s ease-in-out;
margin-right: 3vw;
cursor: pointer;
:hover{
color: rgb(104, 155, 170);
}
@media (max-width: 768px) {
    font-size: 1.4vh;
    margin-right: 2vh;
    display: none;
}
@media (min-width: 769px) and (max-width: 1180px) {
font-size: 1.1vh;
}
`;

export const IconContainer = styled.div`
display: flex;
align-items: center;
margin-right: 5vw;
`;

export const IconMail = styled(MdEmail)`
height: 1.5vw;
width: 1.5vw;
transition: color 5s ease-in-out;
cursor: pointer;
:hover{
color: rgb(104, 155, 170);
}color: rgb(28, 89, 109);
@media (max-width: 768px) {
display: none;
}
@media (min-width: 769px) and (max-width: 1180px) {
height: 2vw;
width: 2vw;
}
`
