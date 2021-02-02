import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => props.setQuery(event.target.value.toLowerCase())}
      placeholder="Search for a product"
    />
  );
};

export default SearchBar;
