import React from 'react'
import { createContext } from 'react';

export const UseButtonContext = createContext();

const ButtonProvider = ({children}) => {

    const handleButtonQuery = () => {
        const whatsappLink = 'https://api.whatsapp.com/send/?phone=5551980388264&type=phone_number';
        const message = 'Olá Dr. Guilherme, vim através do site e desejo agendar uma consulta!';
        window.open(`${whatsappLink}&text=${encodeURIComponent(message)}`, '_blank');
    }

    const handleButtonQuestion = () => {
        const whatsappLink = 'https://api.whatsapp.com/send/?phone=5551980388264&type=phone_number&app_absent=0';
        const message = 'Olá Dr. Guilherme, vim através do site e preciso tirar uma dúvida!'
        window.open(`${whatsappLink}&text=${encodeURIComponent(message)}`, '_blank');
      }


  return (
    <UseButtonContext.Provider 
    value={{handleButtonQuery, handleButtonQuestion}}>
    {children}
    </UseButtonContext.Provider>
  )
}

export default ButtonProvider
