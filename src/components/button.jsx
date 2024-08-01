import React from "react";

export const Button = ({buttonText='Далее'},isDisabled, buttonType='button', buttonClick) => {
    return(
        <button disable={isDisabled} 
        type={buttonType}
        onClick={buttonClick}
        id="next-btn">
        
        {buttonText}
            </button>
    )
}