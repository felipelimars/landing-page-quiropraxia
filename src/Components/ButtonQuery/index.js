import React from 'react'
import { ButtonQueryStyle } from './styled';
import { useContext } from 'react';
import { UseButtonContext } from '../../Hooks/useButton';

const ButtonQuery = () => {

  const { handleButtonQuery } = useContext(UseButtonContext)

  return (
    <div>
        <ButtonQueryStyle onClick={handleButtonQuery}>
        Entrar em contato
        </ButtonQueryStyle>
    </div>
  )
}

export default ButtonQuery

