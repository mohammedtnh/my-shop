import { Redirect } from "react-router-dom";
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { productSlug } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.slug === productSlug);
  if (!product) return <Redirect to="/products" />;
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="productPhoto" />
      <p>{product.description}</p>
      <p className="product-price">{product.price} BHD</p>

      {/* <p onClick={() => props.setProduct(null)}>Go Back Home</p> */}
      <DeleteButton productId={product.id} />
    </DetailWrapper>
  );
};

export default ProductDetail;
