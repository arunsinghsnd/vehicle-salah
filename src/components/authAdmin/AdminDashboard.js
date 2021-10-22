import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const Input = styled("input")({
  display: "none",
});

const AdminDashboard = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ marginTop: "25px" }}>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
      </div>
      <div style={{ marginTop: "25px" }}>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
      </div>
      <div style={{ marginTop: "25px" }}>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          defaultValue="Hello World"
        />
      </div>

      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </Stack>

      <Button variant="contained">Submit</Button>
    </Box>
  );
};

export default AdminDashboard;
