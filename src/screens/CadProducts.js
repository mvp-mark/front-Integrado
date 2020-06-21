import React, { Component, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Navbar from "../components/Navbar";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";

function CadProducts(props) {
//   const [ location, setLocation] = useState([]);
  
//   useEffectt(() => {
//     axios.get('https://projeto--integrado.herokuapp.com/shelves').then(response => {
//         const idLocations = response.data.map(shelve => shelve.id);

//         setLocation(location);
//     });
// }, []);

  return (
    <Container>
      <Navbar
        // title={"undefined"}
        style={{
          height: 48,
          backgroundColor: "rgba(63,81,181,1)",
          flex: 1,
          alignSelf: "stretch"
        }}
        title="Cadastro de Produtos"
      ></Navbar>
      <Group4>
        <MaterialStackedLabelTextbox
          label={"undefined"}
          inputStyle="Input"
          style={{
            height: 60,
            width: 375,
            position: "absolute",
            top: 0,
            left: 0
          }}
          label="Nome do Produto"
          inputStyle="Ex: Camisa X"
        ></MaterialStackedLabelTextbox>
        <MaterialStackedLabelTextbox
          label={"undefined"}
          inputStyle="Input"
          style={{
            height: 60,
            width: 375,
            position: "absolute",
            top: 60,
            left: 0
          }}
          label="SKU do Produto"
          inputStyle="Ex: FLA-50-A"
        ></MaterialStackedLabelTextbox>
        <MaterialStackedLabelTextbox
          label={"undefined"}
          inputStyle="Input"
          style={{
            height: 60,
            width: 375,
            position: "absolute",
            top: 120,
            left: 0
          }}
          label="Prateleira"
          inputStyle="Localização"
        ></MaterialStackedLabelTextbox>
        <MaterialStackedLabelTextbox
          label={"undefined"}
          inputStyle="Input"
          style={{
            height: 60,
            width: 375,
            position: "absolute",
            top: 180,
            left: 0
          }}
          label="Quantidade"
          inputStyle="50"
        ></MaterialStackedLabelTextbox>
        <Rect></Rect>
      </Group4>
      <Group3>
        <MaterialButtonPrimary
          caption={"undefined"}
          style={{
            height: 36,
            width: 100
          }}
          caption="Voltar"
        ></MaterialButtonPrimary>
        <MaterialButtonViolet1
          caption={"undefined"}
          style={{
            height: 36,
            width: 100
          }}
          caption="Cadastrar"
        ></MaterialButtonViolet1>
      </Group3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const Group4 = styled.div`
  top: 208px;
  left: 489px;
  width: 388px;
  height: 336px;
  position: absolute;
  display: flex;
`;

const Rect = styled.div`
  display: flex;
  flex: 1 1 0%;
  background-color: rgba(241, 241, 241,1);
  position: absolute;
  top: 336px;
  left: 188px;
  height: 0px;
  width: 0px;
  flex-direction: column;
`;

const Group3 = styled.div`
  flex-direction: row;
  width: 375px;
  height: 96px;
  justify-content: space-between;
  position: absolute;
  top: 464px;
  left: 495px;
  align-items: center;
  display: flex;
`;

export default CadProducts;
