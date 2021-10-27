import React, { Component } from "react";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";



class Footer extends Component {
  render() {
    return (
      <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit" style={{textAlign: "center"}}>
            Copyright 2021 © The Vehicle Salah from Team A. All Rights Reserved. Privacy Policy 
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    );
  }
}

export default Footer;