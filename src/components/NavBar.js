import { ThemeButton, StyledLink, NavProduct } from "../styles";
import logo from "../logo.png";
import { useSelector } from "react-redux";
import { signout } from "../store/actions/authActions";
import { useDispatch } from "react-redux";

const NavBar = (props) => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <StyledLink to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </StyledLink>
      <div className="navbar-nav ml-auto">
        <NavProduct exact to="/" className="nav-item">
          Home
        </NavProduct>
        {user ? (
          <>
            {console.log(user)}
            <p>Welcome, {user.username}</p>

            <ThemeButton
              onClick={() => dispatch(signout())}
              className="nav-item"
            >
              Signout
            </ThemeButton>
          </>
        ) : (
          <>
            <NavProduct to="/signup" className="nav-item">
              Signup
            </NavProduct>
            <NavProduct to="/signin" className="nav-item">
              Signin
            </NavProduct>
          </>
        )}
        {user && (
          <>
            <NavProduct to="/shops" className="nav-item">
              Shops
            </NavProduct>
            <NavProduct to="/products" className="nav-item">
              Products
            </NavProduct>
          </>
        )}
        <ThemeButton className="nav-item" onClick={props.toggleCurrentTheme}>
          {props.currentTheme === "light" ? "Light" : "Dark"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
