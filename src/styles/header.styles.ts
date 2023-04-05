import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #213e5c;
  padding: 3%;
  text-align: center;
  color: #f4d06f;
`;

export const Logo = styled.img`
  width: 6em;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style-type: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f4d06f;
  padding: 2em;
`;
