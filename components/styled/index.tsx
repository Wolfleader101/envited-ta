import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  @media (min-width: 1024px) {
    width: 100%;
  }
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

type ButtonProps = {
  cta?: boolean;
};
export const Button = styled.button<ButtonProps>`
  border: none;

  padding: 0.5rem 1.5rem;
  font-size: 12px;
  color: white;
  font-weight: 700;
  line-height: 21px;

  /* background: linear-gradient(
    107.04deg,
    ${(props) => props.theme.colors.secondary.green} 48.99%,
    ${(props) => props.theme.colors.secondary.blueGradient} 118.32%
  ); */
  background: linear-gradient(107.04deg, #c346d5 52.6%, #501fc1 118.32%);
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const Heading = styled.h1`
  font-weight: 800;
  font-size: 32px;
  line-height: 30px;
  text-align: center;
`;

export const SubText = styled.p`
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  padding-top: 2rem;
  width: 295px;
`;
