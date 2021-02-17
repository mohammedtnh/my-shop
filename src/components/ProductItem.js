import { Link } from "react-router-dom";
import { ItemWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ItemWrapper>
      <Link to={`/products/${product.slug}`}>
        <img src={product.image} alt={product.name} className="productPhoto" />
      </Link>

      <p> {product.name}</p>
      <p className="product-price"> {product.price} BHD</p>
      <DeleteButton productId={product.id} />
      <UpdateButton slug={product.slug} />
    </ItemWrapper>
  );
};

export default ProductItem;
