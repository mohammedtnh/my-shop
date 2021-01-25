import { ProductWrapper, DeleteButtonStyled } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductItem = (props) => {
  const product = props.product;
  const setProduct = props.setProduct;

  const handleDelete = () => {
    props.deleteProduct(product.id);
  };

  return (
    <ProductWrapper>
      <img
        src={product.image}
        alt={product.name}
        className="productPhoto"
        onClick={() => setProduct(product)}
      />
      <p> {product.name}</p>
      <p className="product-price"> {product.price} BHD</p>
      <DeleteButton productId={product.id} deleteProduct={handleDelete} />
    </ProductWrapper>
  );
};

export default ProductItem;
