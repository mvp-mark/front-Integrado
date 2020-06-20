import React, { Component } from "react";
import styled, { css } from "styled-components";

function Product(props) {
  return (
    <Container {...props}>
      <Rect>
        <NameRow>
          <Name>Nome: Camisa Preta- - Flamengo</Name>
          <Sku>SKU: FLA-10-B</Sku>
          <LocalEstante1>Local:estante 1</LocalEstante1>
        </NameRow>
        <NameRowFiller></NameRowFiller>
        <Quantity>Qtd:80</Quantity>
      </Rect>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect = styled.div`
  height: 55px;
  background-color: #E6E6E6;
  flex-direction: row;
  display: flex;
  width: 100vw;
`;

const Name = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: #121212;
`;

const Sku = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: #121212;
  margin-left: 20vw;
`;

const LocalEstante1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: #121212;
  margin-left: 20vw;
`;

const NameRow = styled.div`
  height: 17px;
  flex-direction: row;
  margin-left: 32px;
  margin-top: 19px;
  display: flex;
`;

const NameRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Quantity = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: #121212;
  margin-top: 19px;
  margin-right: 10vw;
`;

export default Product;
