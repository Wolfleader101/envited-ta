import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  color: white;
  /* &::placeholder {
    color: white;
    opacity: 1;
  } */

  outline: none;

  border: 3px solid;
  border-color: ${(props) => props.theme.colors.secondary.pink};
  border-radius: 2px;

  background: transparent;
  padding: 0.5rem 1.5rem;

  transition: outline 1s ease-in-out;
  transition: border-radius 0.75s ease-in-out;
  &:focus {
    border-color: ${(props) => props.theme.colors.secondary.green};
    border-radius: ${(props) => props.theme.borderRadius};
  }
  width: 75%;
`;

type LabelProps = {
  focus?: boolean;
};

export const StyledLabel = styled.label<LabelProps>`
  font-size: 1.25rem;
  font-weight: bold;
  transition: color 0.5s ease-in-out;
  color: ${(props) => (props.focus ? props.theme.colors.secondary.green : "white")};
`;
