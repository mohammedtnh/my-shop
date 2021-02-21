import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../store/actions/authActions";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Signin</h1>
        <div className="form-group row">
          <div className="col-6">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-info float-right">
          Signin
        </button>
      </form>
    </>
  );
};

export default Signin;
