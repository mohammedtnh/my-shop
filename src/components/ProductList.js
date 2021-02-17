import { ListWrapper, Title } from "../styles";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const ProductList = ({ products }) => {
  // const products = useSelector((state) => state.productReducer.products);
  const [query, setQuery] = useState("");
  const loading = useSelector((state) => state.loading);

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
