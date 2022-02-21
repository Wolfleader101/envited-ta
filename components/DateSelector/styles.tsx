import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

type LabelProps = {
  focus?: boolean;
};

export const StyledLabel = styled.label<LabelProps>`
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.5s ease-in-out;
  color: ${(props) => (props.focus ? props.theme.colors.secondary.green : "white")};
`;
