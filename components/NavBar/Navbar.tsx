import Logo from "components/Logo";
import { Button } from "../styled";
import { StyledNavbar } from "./styles";

const NavBar = () => {
  return (
    <StyledNavbar>
      <Logo />
      <Button>Log in</Button>
    </StyledNavbar>
  );
};

export default NavBar;
