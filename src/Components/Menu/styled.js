import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export const HamburgerButton = styled.div`
  width: 2em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin-top: 5.5vw;
    margin-right: 5vw;
  }
`;

export const IconMenu = styled(HiMenu)`
  font-size: 1.5em;
  z-index: 999;
  color: rgb(28, 89, 109);
  cursor: pointer;
      &:hover {
      color: black;
    }
`;
export const IconCloseMenu = styled(AiOutlineClose)`
  font-size: 1.5em;
  z-index: 999;
  color: rgb(28, 89, 109);
  cursor: pointer;
  &:hover {
      color: black;
    }
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  width: 0; 
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 998;
  transition: width 0.5s ease-in-out; 
  overflow: hidden;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6vh;
  font-size: 2vh;
  font-weight: bold;
  font-family: "Montserrat Classic", sans-serif;
  color: rgb(28, 89, 109);
  transition: color 5s ease-in-out;

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit; 

    &:hover {
      color: rgb(104, 155, 170);
    }
  }
`;
