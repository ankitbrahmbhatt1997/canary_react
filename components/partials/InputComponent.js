import React from "react";
import { InputStyle, StyledLabel } from "../../styles/AuthFormStyle";

function InputComponent({
    name,
    placeholder,
    value,
    error,
    onChange,
    type,
    disabled
}) {
    return (
        <div className="form-group">
            <StyledLabel htmlFor={name} color="red">{error ? error : ""}</StyledLabel>
            <InputStyle
                type={type}

                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />

        </div>
    );
}


export default InputComponent;