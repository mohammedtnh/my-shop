import { Link } from "react-router-dom";
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ slug }) => {
  return (
    <Link to={`/products/${slug}/edit`}>
      <UpdateButtonStyled>Edit</UpdateButtonStyled>
    </Link>
  );
};

export default UpdateButton;
