import { Link } from "react-router-dom";
import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img src={product.image} alt={product.name} className="productPhoto" />
      </Link>

      <p> {product.name}</p>
      <p className="product-price"> {product.price} BHD</p>
      <DeleteButton productId={product.id} />
    </ProductWrapper>
  );
};

export default ProductItem;
