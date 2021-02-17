import { Redirect } from "react-router-dom";
import { DetailWrapper } from "../styles";
import AddButton from "./buttons/AddButton";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";

const ShopDetail = () => {
  const shopSlug = useParams().shopSlug;
  const allProducts = useSelector((state) => state.productReducer.products);
  const shop = useSelector((state) =>
    state.shopReducer.shops.find((shop) => shop.slug === shopSlug)
  );

  console.log(`shop looooog`, shop);
  if (!shop) return <Redirect to="/shops" />;

  const products = shop.products.map((product) =>
    allProducts.find((_product) => _product.id === product.id)
  );
  console.log(products);

  return (
    <>
      <DetailWrapper>
        <h1>{shop.name}</h1>
        <img src={shop.image} alt={shop.name} className="productPhoto" />
      </DetailWrapper>

      <AddButton shopId={shop.id} />

      <ProductList products={products} />
    </>
  );
};

export default ShopDetail;
