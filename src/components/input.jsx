import React from "react";

export const Input = ({inputText,  inputPlaceholder, 
    inputType, inputId, inputName, errorText, inputPattern }) => {
    return (
        <label className="input-wrapper" htmlFor="username">
            {inputText}
            <input
                required
                type={inputType}
                name={inputName}
                id={inputId}
                placeholder={inputPlaceholder}
                pattern={inputPattern}
            />
            <span id="error-message">
                {errorText}
            </span>
        </label>
        
    )
}