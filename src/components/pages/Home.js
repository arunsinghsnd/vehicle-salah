import React, { Component } from "react";
import "./styles.css";
import { Grid } from "@mui/material";
import { vehicels } from "../Data/Vehicels";
import CardList from "./CardList";
import SearchAppBar from "../layout/SearchAppBar";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicels: vehicels,
      searchfield: "",
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredVehicels = this.state.vehicels.filter(vehicels => {
      return vehicels.brand
        .toLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase());
    });
    return (
      <>
        <SearchAppBar SearchChange={this.onSearchChange} />
        {filteredVehicels.length === 0 ? (
          <div>
            <h1>No Results Found</h1>
          </div>
        ) : (
          <Grid
            container
            spacing={4}
            style={{ paddingLeft: "40px", paddingRight: "40px" }}
            justify="center"
          >
            <CardList vehicels={filteredVehicels} />
          </Grid>
        )}
      </>
    );
  }
}

export default Home;
