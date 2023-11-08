import { useContext } from "react"
import WhatsappIcon from "../../assets/whatsapp.png"
import { UseButtonContext } from "../../Hooks/useButton"
import { ButtonWhats, Icon } from "./styled"

const ButtonWhatsapp = () => {

  const { handleButtonQuestion } = useContext(UseButtonContext)

  return (
    <ButtonWhats onClick={handleButtonQuestion} title="WhatsApp">
    <Icon src={WhatsappIcon} alt="WhatsApp" />
    </ButtonWhats>
  )
}

export default ButtonWhatsapp
