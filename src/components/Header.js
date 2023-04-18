import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";
import { Item } from "@mui/material";

// const history = useHistory();
const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();

  let logoutFun =() =>
  {
    localStorage.clear();
    window.location.reload();
    history.push("/", { from: "Header" })
  }
  return (
    <Box className="header">
      {" "}
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {children}
      
      {hasHiddenAuthButtons?(
        <Button
        className="explore-button"
        startIcon={<ArrowBackIcon />}
        variant="text"
        onClick={() => history.push("/", { from: "Header" })}
      >
        Back to explore
      </Button>):(
        localStorage.getItem('username')!==null?(
          <Stack direction="row" sx={{alignItems:"center", justifyContent:'center'}} spacing={2}>

            <Avatar alt="Crio.do" src="avatar.png"/>
               
               {localStorage.username}
              <Button  onClick={(logoutFun)}>
                Logout</Button>
              
              </Stack>
        ):(
          <Box>
          <Button
          onClick={() => history.push("/login", { from: "Header" })}>
            Login</Button>
          <Button variant="contained"
          onClick={() => history.push("/register", { from: "Header" })}>
            Register</Button>
          </Box>)
        )
      }
    </Box>
  );
};

export default Header;
