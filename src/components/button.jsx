import React from "react";

export const Button = ({buttonText='Далее'},isDisabled) => {
    return(
        <button disable={isDisabled} type="submit" id="next-btn">
              {buttonText}
            </button>
    )
}