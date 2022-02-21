import styled from "styled-components";

type CardContainerProps = {
  src: string;
  large?: boolean;
};
export const CardContainer = styled.div<CardContainerProps>`
  width: ${(props) => (props.large ? "136px" : "96px")};
  height: ${(props) => (props.large ? "242px" : "171px")};
  box-shadow: 0px 0px 40px 20px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  background: white;
  margin: 0.25rem;

  /* background-image: url(${(props) => props.src});
  background-repeat: none;
  background-size: fill; */
`;

// export const CardImage = styled(Image)`
//   border-radius: ${(props) => props.theme.borderRadius};
// `;
