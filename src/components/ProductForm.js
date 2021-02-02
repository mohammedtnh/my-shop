import { useState } from "react";
import { CreateButtonStyled } from "../styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Redux Actions
import { createProduct } from "../store/actions";

const ProductForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createProduct(product));
    history.push("/products");
  };

  return (
    <>
      <h1>Product Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              type="number"
              min="1"
              className="form-control"
              name="price"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right" type="submit">
          Create
        </CreateButtonStyled>
      </form>
    </>
  );
};
export default ProductForm;
