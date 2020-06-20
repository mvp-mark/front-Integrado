import React, { Component } from "react";
import styled, { css } from "styled-components";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";

function Produtos(props) {
  return (
    <Container>
      <NavbarColumn>
        <Navbar
          style={{
            height: 48,
            backgroundColor: "rgba(63,81,181,1)"
          }}
          title="Produtos"
        ></Navbar>
        <ItemProduct>
          <Product
            style={{
              height: 55,
              margin: 0,
              alignSelf: "stretch"
            }}
            Name="CAMISA DOIDA"
            quantity="50"
            sku="SKU: FLA-10-B"
            localEstante1="Local: estante 1"
          ></Product>
          <Product
            style={{
              height: 55,
              margin: 1,
              alignSelf: "stretch"
            }}
          ></Product>
          <Product
            style={{
              height: 55,
              margin: 1,
              alignSelf: "stretch"
            }}
          ></Product>
          <Product
            style={{
              height: 55,
              margin: 1,
              alignSelf: "stretch"
            }}
          ></Product>
        </ItemProduct>
      </NavbarColumn>
      <NavbarColumnFiller></NavbarColumnFiller>
      <MaterialIconTextButtonsFooter
        style={{
          height: 56,
          width: 375,
          alignSelf: "center"
        }}
      ></MaterialIconTextButtonsFooter>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ItemProduct = styled.div`
  width: 1366px;
  height: 116px;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 23px;
  display: flex;
`;

const NavbarColumn = styled.div`
  flex-direction: column;
  display: flex;
`;

const NavbarColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

export default Produtos;
