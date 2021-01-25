import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  const product = props.product;
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="productPhoto" />
      <p>{product.description}</p>
      <p className="product-price">{product.price} BHD</p>
      <p onClick={() => props.setProduct(null)}>Go Back Home</p>
    </DetailWrapper>
  );
};

export default ProductDetail;
