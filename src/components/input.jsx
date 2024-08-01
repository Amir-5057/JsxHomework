import React from "react";

export const Input = ({inputText,  inputPlaceholder, 
    inputType, inputId, inputName, errorText, inputPattern,
    inputValue, inputChange }) => {
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
                value={inputValue}
                onChange={(event) => inputChange(event.target.value)}
            />
            <span id="error-message">
                {errorText}
            </span>
        </label>
        
    )
}