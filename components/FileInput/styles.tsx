import { Button } from "components/styled";
import styled from "styled-components";

export const FileUploadButton = styled(Button)`
  font-size: 1.5rem;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
export const HiddenFileInput = styled.input`
  display: none;
`;
