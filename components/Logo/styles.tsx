import styled from "styled-components";
import Image from "next/image";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;

export const LogoImage = styled(Image)`
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const LogoText = styled.h1`
  font-size: 25px;
  font-weight: 700;
  margin-left: 0.5rem;
  color: white;
`;
