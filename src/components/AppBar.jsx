import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

export default function ButtonAppBar({ title, children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {children}
          <Button color="inherit">Save</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
