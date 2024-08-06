import React, { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Button } from "../components/button";


const Thanks = () => {
  const [buttonError, setButtonError] = useState(true);

  useEffect(() => {
    setButtonError(false)
  })
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Header headerText={'Спасибо что оставили отзыв'}
            headerType={'h2'} />
          <p>Вы можете получить скиду 
            нажав на кнопку</p>
          <a href="https://youtu.be/Lm4LYX3xdkU?si=Y0q8HQ384w-IbwI3" >
            <Button isDisabled={buttonError} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
