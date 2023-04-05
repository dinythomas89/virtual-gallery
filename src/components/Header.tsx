import {
  HeaderContainer,
  Logo,
  NavBar,
  StyledLink,
} from "../styles/header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="./logo.png" />
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/favourites">Favourites</StyledLink>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
