import React, { useState } from "react";
import { StyledInput, StyledLabel, InputContainer } from "./styles";

type Props = {
  placeholder: string;
  name: string;
  label: string;
  value: string;
  setValue: (value: React.SetStateAction<any>) => void;
};
const TextInput = ({ placeholder, name, label, value, setValue }: Props) => {
  const [focus, setFocus] = useState(false);
  return (
    <InputContainer>
      <StyledLabel htmlFor={name} focus={focus}>
        {label}
      </StyledLabel>
      <StyledInput
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onFocus={(e) => setFocus(true)}
        onBlur={(e) => setFocus(false)}
      />
    </InputContainer>
  );
};

export default TextInput;
