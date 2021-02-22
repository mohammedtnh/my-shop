import { ListWrapper, Title } from "../styles";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { Redirect } from "react-router";

const ProductList = ({ products }) => {
  // const products = useSelector((state) => state.productReducer.products);
  const [query, setQuery] = useState("");
  const loading = useSelector((state) => state.loading);
  const user = useSelector((state) => state.authReducer.user);
  if (!user) return <Redirect to="/signin" />;

  if (loading) return <Loading />;

  const productList = products
    .filter((product) => product.name.toLowerCase().includes(query))
    .map((product) => <ProductItem key={product.id} product={product} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Title>Products</Title>
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};
export default ProductList;
