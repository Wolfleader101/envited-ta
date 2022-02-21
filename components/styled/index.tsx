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

export const MainPage = styled(Page)`
  background: linear-gradient(163.63deg, ${(props) => props.theme.colors.primary.purple} 12.2%, ${(props) => props.theme.colors.primary.pink} 96.78%);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;

export const PageContainer = styled(Container)`
  margin-top: 8rem;
`;

export const PageBreak = styled.div`
  padding: 1rem;
`;

type ButtonProps = {
  cta?: boolean;
};
export const Button = styled.button<ButtonProps>`
  border: none;

  padding: ${(props) => (props.cta ? "1rem 1.5rem" : "0 1.5rem")};
  font-size: ${(props) => (props.cta ? "16px" : "12px")};
  font-weight: 700;
  line-height: 21px;
  color: white;

  background: linear-gradient(
    107.04deg,
    ${(props) => (props.cta ? props.theme.colors.secondary.green : props.theme.colors.primary.pink)} 52.6%,
    ${(props) => (props.cta ? props.theme.colors.secondary.blueGradient : props.theme.colors.primary.purple)} 118.32%
  );
  border-radius: ${(props) => props.theme.borderRadius};

  cursor: pointer;
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
  /* padding-top: 2rem; */
  width: 295px;
`;

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
`;

export const SocialMediaBg = styled.div`
  background-image: url("/icons_bg.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 100vw;
  height: 309px;
`;
