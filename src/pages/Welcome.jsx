import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [surname, setSername] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const [buttonError, setButtonError] = useState(true);

  useEffect(() => {
    if(name && phone){
      setButtonError(false)
    }
  }, [name, phone, surname, address, email, password]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header />
          <form className="welcome__form">
            <Input
              inputText="Введите ваше имя"
              inputType="text"
              inputName="username"
              inputId="username"
              inputPlaceholder="Введите ваше имя в правильном формате"
              errorText="Введите имя правильно"
              inputValue={name}
              inputChange={setName}
            />
            <Input
              inputText="Введите вашу фамилию"
              inputType="text"
              inputName="sername"
              inputId="sername"
              inputPlaceholder="Введите вашу фамилию в правильной форме"
              errorText="Введите фамилию правильно"
              inputValue={surname}
              inputChange={setSername}
            />
            <Input
              inputText="Ваш номер"
              errorTextText="Введите номер в правильном формате например"
              inputPlaceholder='+998 9- --- -- --'
              inputType="tel"
              inputName="phone"
              inputId="phone"
              inputPattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              inputValue={phone}
              inputChange={setPhone}
            />
            <Input
              inputText="Введите ваш адрес"
              inputType="text"
              inputName="address"
              inputId="address"
              inputPlaceholder="Введите правильный адрес"
              inputValue={address}
              inputChange={setAddress}
            />
            <Input
              inputText="Введите вашу почту"
              inputType="email"
              inputName="email"
              inputId="email"
              inputPlaceholder="example@gmail.com"
              inputValue={email}
              inputChange={setEmail}
            />
            <Input
              inputText="Введите ваш пароль"
              inputType="password"
              inputName="password"
              inputId="password"
              inputPlaceholder="Пароль должен состоять из слов, цифр и символов"
              inputValue={password}
              inputChange={setPassword  }
            />
            <Link to={'step_one'}>
              <Button isDisabled={buttonError} />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
