import { ListWrapper, Title } from "../styles";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddButton from "./buttons/AddButton";
import Loading from "./Loading";

const ProductList = () => {
  const products = useSelector((state) => state.products);
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
      <AddButton />
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};
export default ProductList;
