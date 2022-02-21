import { Container, Heading, Page } from "components/styled";
import styled from "styled-components";

export const MainPage = styled(Page)`
  background: linear-gradient(163.63deg, ${(props) => props.theme.colors.primary.purple} 12.2%, ${(props) => props.theme.colors.primary.pink} 96.78%);
`;

export const MainPageContainer = styled(Container)`
  margin-top: 8rem;
`;

// export const MainPageHeader = styled(Header)``
