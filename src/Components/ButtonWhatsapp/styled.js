import styled from "styled-components";

export const ButtonWhats = styled.button`
  position: fixed;
  z-index: 2;
  bottom: 0.5%;
  right: 0.3%;
  background-color: transparent;
  cursor: pointer;
`;

export const Icon = styled.img`
  height: 6vh;
  width: auto;
  @media (max-width: 768px) {
  height: 5.5vh;
  width: auto;
  }
`;

export const WhatsappButton = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease; 
  
  &:hover {
    ${ButtonWhats} {
      width: 150px; 
    }

    ${Icon} {
      content: url('caminho-para-sua-imagem-do-whatsapp');
      height: 50px;
      width: 50px;
    }
  }
`;
