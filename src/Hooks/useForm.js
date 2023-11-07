import { createContext, useState } from "react";
import emailjs from "@emailjs/browser";
import { ParamsId, ServiceId, TemplateId } from "../Constants/constants";

export const UseFormContext = createContext();

const FormProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || message === "") {
      alert("Preencha todos os campos!");
      return;
    }
    const templateParams = {
      from_name: name,
      message: message,
      phone: phone,
      email: email,
    };

    emailjs
      .send(
        ServiceId,
        TemplateId,
        templateParams,
        ParamsId
      )
      .then(
        (response) => {
          console.log("email enviado", response.status, response.text);

          if (message.length > 400) {
            setMessage("");
            alert("O email é muito longo, digite no máximo 400 caracteres.");
            return;
          }
          if (message.length < 15) {
            alert("A mensagem deve ter pelo menos 15 caracteres.");
            return;
          }
          if (name.length > 50) {
            setName("");
            alert("O nome é muito longo.");
            return;
          }
          if (name === "") {
            alert("Por favor, preencha o campo 'Nome'!");
            return;
          }

          if (name.length < 3) {
            alert("O nome deve ter pelo menos 3 caracteres.");
            return;
          }

          const phonePattern = /^(\+\d{1,3}\s?)?(\(?\d{2}\)?\s?)?\d{4,5}\s?\-?\s?\d{4}$/;

          if (!phonePattern.test(phone)) {
            setPhone("");
            alert(
              "Por favor, insira um número de telefone válido (exemplo: (99) 99999-9999)."
            );
            return;
          }
          if (phone === "") {
            alert("Por favor, preencha o campo 'telefone'!");
            return;
          }

          if (!/^[A-Za-z\s]+$/.test(name)) {
            alert("O nome deve conter apenas letras e espaços.");
            return;
          }
          if (name === "") {
            alert("Por favor, preencha o campo com seu nome!");
            return;
          }

          const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

          if (!emailPattern.test(email)) {
            alert("O endereço de e-mail não é válido!");
            return;
          }
          if (email === "") {
            alert("Preencha o campo E-mail!");
            return;
          }
          alert("E-mail enviado com sucesso!");
          setEmail("");
          setName("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          console.log("Error: ", error);
        }
      );
  };

  return (
    <UseFormContext.Provider
      value={{
        name,
        email,
        phone,
        message,
        setEmail,
        setName,
        setPhone,
        setMessage,
        sendEmail,
      }}
    >
      {children}
    </UseFormContext.Provider>
  );
};

export default FormProvider;
