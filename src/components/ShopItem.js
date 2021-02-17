import { Link } from "react-router-dom";
import { ItemWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

const ShopItem = (props) => {
  const shop = props.shop;

  return (
    <ItemWrapper>
      <Link to={`/shops/${shop.slug}`}>
        <img src={shop.image} alt={shop.name} className="productPhoto" />
      </Link>

      <p> {shop.name}</p>
      <DeleteButton shopId={shop.id} />
      <UpdateButton slug={shop.slug} />
    </ItemWrapper>
  );
};

export default ShopItem;
