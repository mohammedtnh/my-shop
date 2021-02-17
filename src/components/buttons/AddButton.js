import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";

const AddButton = (props) => {
  const shopId = props.shopId;
  console.log("Add button", shopId);
  return (
    <Link to={`/shops/${shopId}/products/new`}>
      <AddButtonStyled />
    </Link>
  );
};

export default AddButton;
