import React, { Component } from "react";
import styled, { css } from "styled-components";
import Navbar from "../components/Navbar";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import { Link } from "react-router-dom";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CadShelves(props) {



  return (
    <>
      <Navbar
        title={"undefined"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 48,
          backgroundColor: "rgba(63,81,181,1)",
          right: 0
        }}
        title="Cadastrar Estante"
      />
      <Center>
        <Group1>
          <TextField
            label={"undefined"}
            inputStyle="Input"
            variant="outlined"
            style={{
              height: 60,
              width: 375,
              position: "absolute",
              top: 6,
              left: 0,
              marginBottom: 8
            }}
            label="Endereço"
          // inputStyle="Estante X"
          ></TextField>
          <TextField
            label={"undefined"}
            inputStyle="Input"
            variant="outlined"
            style={{
              height: 60,
              width: 375,
              position: "absolute",
              top: 60,
              left: 0,
              marginTop: 8
            }}
            inputStyle="8"
            label="Posição"
          ></TextField>
          <TextField
            label={"undefined"}
            variant="outlined"
            inputStyle="Input"
            style={{
              height: 60,
              width: 375,
              position: "absolute",
              top: 120,
              marginTop: 12,
              left: 0
            }}
            label="Descrição"
            inputStyle="Estante de roupas"
          ></TextField>
          <Rect1></Rect1>
        </Group1>
      </Center>
      {/* <Link to="/Produtos"> */}
      <div style={{
        justifyContent: "space-between",
        position: "absolute",
      }}>
        <ButtonOverlay>
          <Button
            caption={"undefined"}
            label="voltar"
            style={{
              height: 36,
              flex: 1,
              width: 100,
              flexDirection: "row",
              // width: "375px",
              // height: "96px",
              justifyContent: "space-between",
              position: "absolute",
              top: "602px",
              left: "300px",
              alignItems: "center",
              border: "none",
            }}
            color="secondary"
            caption="Voltar"
          >Voltar</Button>
          <Button
            varcolor="primary"
            label="Cadastrar"
            style={{
              height: 36,
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",

              // width: 50,
              // display: "outside",
              // width: "375px",
              // height: "96px",
              // justifyContent: "space-between",
              position: "absolute",
              top: "602px",
              left: "496px",
              // alignItems: "center",
              border: "1px",
            }}
            color="primary"
          > Cadastrar</Button>
        </ButtonOverlay>
      </div>
      {/* </Link> */}
    </>
  );
}

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:1px
 `;
const Center = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  pointer-events: all;

  ${props =>
    ((props.horizontal && !props.vertical) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      align-items: center;
  `};


  ${props =>
    ((props.vertical && !props.horizontal) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      justify-content: center;
  `};
  `;

const Group1 = styled.div`
  width: 388px;
  height: 336px;
  position: absolute;
  display: flex;
`;

const Rect1 = styled.div`
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

// const Button = styled.div`
// flex-direction: row;
// width: 375px;
// height: 96px;
// justify-content: space-between;
// position: absolute;
// top: 402px;
// left: 496px;
// align-items: center;
// border: none;
// `;

export default CadShelves;
