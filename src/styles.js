import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
color: ${(props) => props.theme.mainColor};
background: ${(props) => props.theme.backgroundColor};
}
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ProductWrapper = styled.div`
  margin: 20px;
  img {
    height: 200px;
    width: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }

  p {
    text-align: center;

    &.product-price {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;