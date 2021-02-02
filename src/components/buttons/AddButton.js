import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";
// import { useDispatch } from "react-redux";
// import { deleteProduct } from "../../store/actions";

const AddButton = () => {
  //   const dispatch = useDispatch();

  return (
    <Link to="/products/new">
      <AddButtonStyled />
    </Link>
  );
};

export default AddButton;
