import { useState } from "react";
import { InputContainer, StyledLabel } from "./styles";

type Props = {
  name: string;
  label: string;
  value: string;
  setValue: (value: React.SetStateAction<any>) => void;
};

const DateSelector = ({ name, label, value, setValue }: Props) => {
  return (
    <InputContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <input type="date" name={name} value={value} onChange={(e) => setValue(e.target.value)} min="2018-01-01" max="2050-12-31" />
    </InputContainer>
  );
};

// const TextInput = ({ placeholder, name, label, value, setValue }: Props) => {
//   const [focus, setFocus] = useState(false);
//   return (
//     <InputContainer>
//       <StyledLabel htmlFor={name} focus={focus}>
//         {label}
//       </StyledLabel>
//       <StyledInput
//         type="text"
//         name={name}
//         value={value}
//         placeholder={placeholder}
//         onChange={(e) => setValue(e.target.value)}
//         onFocus={(e) => setFocus(true)}
//         onBlur={(e) => setFocus(false)}
//       />
//     </InputContainer>
//   );
// };

export default DateSelector;
