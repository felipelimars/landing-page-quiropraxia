import React from 'react'
import { Button, Container, IconEmail, Title, IconPhone, IconUser, Image, InputContainer, InputStyle, TextContainer, TextStyle } from './styled'
import Clinica from '../../assets/clinica.jpg'
import { useContext } from 'react';
import { UseFormContext } from '../../Hooks/useForm';

const Contact = () => {

  const { name, email, phone, message, setName, setEmail, setPhone, setMessage, sendEmail } = useContext(UseFormContext);

  return (
    <Container id='contato'>
      <Image src={Clinica}  alt="Imagem de uma clinica"/>
      <TextContainer>
      <Title>CONTATO</Title>
        <form onSubmit={sendEmail}>
        <InputContainer>
          <IconUser/>
          <InputStyle
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Nome completo'
          />
        </InputContainer>
        <InputContainer>
        <IconEmail/>
          <InputStyle
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='E-mail'
          />
        </InputContainer>
        <InputContainer>
        <IconPhone/>
          <InputStyle
            type="phone"
            id="phone"
            name="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Celular'
          />
        </InputContainer>
        <div>
          <TextStyle
            id="text"
            name="text"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Digite sua mensagem para nos enviar um e-mail.'
            />
        </div>
        <Button type="submit">{sendEmail ? "Enviar" : "Enviando..." } </Button>
      </form>      
      </TextContainer>
    </Container>
  )
}

export default Contact
