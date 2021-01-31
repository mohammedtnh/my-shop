import { ThemeButton, StyledLink, NavProduct } from "../styles";
import logo from "../logo.png";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <StyledLink to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </StyledLink>
      <div className="navbar-nav ml-auto">
        <NavProduct exact to="/" className="nav-item">
          Home
        </NavProduct>
        <NavProduct to="/products" className="nav-item">
          Products
        </NavProduct>
        <ThemeButton className="nav-item" onClick={props.toggleCurrentTheme}>
          {props.currentTheme === "light" ? "Light" : "Dark"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
