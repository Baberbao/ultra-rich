import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import bg from "../images/bg.png";
import mobilebg from "../images/mobilebg.png";

import Home from "./Home";
export default function MainSection() {
  const matches = useMediaQuery("(max-width:700px)");

  return (
    <>
      <Box
        pt={2}
        pb={12.7}
        sx={{
          background: `url(${matches ? mobilebg : bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Navbar />
        <Home />
      </Box>
    </>
  );
}
