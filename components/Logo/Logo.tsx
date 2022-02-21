import { LogoImage, LogoContainer, LogoText } from "./styles";
const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src="/envited_white_bg.png" width={40} height={40} />
      <LogoText>envited</LogoText>
    </LogoContainer>
  );
};

export default Logo;
