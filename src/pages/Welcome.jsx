import React from "react";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { Button } from "../components/button";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
         <Header/>
          <form className="welcome__form">
           <Input inputText={'Введите ваше имя'} inputType={'text'} inputName={'username'} 
           inputId={'username'} inputPlaceholder={'Введите ваше имя в правильном формате'} 
           errorText={'Введите имя правильно'}/>
           <Input inputText={'Введите ваше фамилию'} inputType={'text'} inputName={'sername'} 
           inputId={'sername'} inputPlaceholder={'Введите ваше фамилию в правильном форме'} 
           errorText={'Введите фамилию правильно'}/>
           <Input inputText={'Ваше номер'}
              errorTextText={'Введите номер в правильном формате например'}
              inputPlaceholder={'"+998 9- --- -- -- "'}
              inputType={'tel'} inputName={'phone'} inputId={'phone'} 
              inputPattern={'^(?:\+998)?(?:\d{2})?(?:\d{7})$'} />
              
            <Input inputText={'Введите ваш адрес'} inputType={'text'} inputName={'adress'} 
            inputId={'adress'} inputPlaceholder={'Введите правильный адрес'}/>

            <Input inputText={'Введите вашу почту'} inputType={'email'}
            inputName={'email'} inputId={'email'} inputPlaceholder={'example@gmail.com'}/>
            <Input inputText={'Введите ваш пароль'} inputType={'password'} inputName={'password'}
            inputId={'password'} 
            inputPlaceholder={'Паоль должен состоять из слов, цифр и символоф'}/>
          
          <Button isDisabled={true}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
