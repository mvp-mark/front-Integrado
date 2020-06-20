import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { useHistory } from "react-router-dom";

export default function Navbar(props) {
  
    const [anchorEl, setAnchorEl] = useState();
    const open = Boolean(anchorEl);
    const history = useHistory();

    function handleClick(event) {
      setAnchorEl(event.currentTarget);
    };

    function handleClose() {
      setAnchorEl(null);
    };
    
    function handleProdcad(){
      const CadProducts ='/CadProducts';
      history.push(CadProducts);
    }
    function handleShelves(){
      const CadShelves ='/CadShelves';
      history.push(CadShelves);
    }
    function handleLogout(){
      const Logout ='/';
      history.push(Logout);
    }
    
  
  return (
    // <div>

      <Container {...props}>
        <LeftIconButton>
          <ButtonOverlay>
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <MaterialCommunityIconsIcon
              name="menu"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontSize: 24
              }}

            ></MaterialCommunityIconsIcon>
      </Button>

            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >  <MenuItem onClick={handleProdcad}>Cadastrar Produtos</MenuItem>
              <MenuItem onClick={handleShelves}>Cadastrar Prateleiras</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
           
          </ButtonOverlay>
        </LeftIconButton>
        <TextWrapper>
          <Title numberOfLines={1}>{props.title || "Title"}</Title>
        </TextWrapper>
        <RightIconButton>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="dots-vertical"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontSize: 24
              }}
            ></MaterialCommunityIconsIcon>
          </ButtonOverlay>
        </RightIconButton>
      </Container>
    // </div>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border: 1px;
 `;
const LeftIconButton = styled.div`
  padding: 0px;
  position: absolute;
  top: 6px;
  left: 0px;
  border: none;
`;

const TextWrapper = styled.div`
  position: absolute;
  left: 67px;
  bottom: 16px;
  display: flex;
`;

const Title = styled.span`
  font-family: Roboto;
  font-size: 18px;
  color: #FFFFFF;
  background-color: transparent;
  line-height: 18px;
  font-weight: 600;
`;

const RightIconButton = styled.div`
  padding: 11px;
  position: absolute;
  top: 0px;
  right: 0px;
  align-items: center;
  border: none;
`;

// export default Navbar;
