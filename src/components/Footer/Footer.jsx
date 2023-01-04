import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import fooicon from "../../images/fooicon.png";
import tele from "../../images/tele.png";
import discord from "../../images/discord.png";
import fb from "../../images/fb.png";
import reddit from "../../images/reddit.png";
import insta from "../../images/insta.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        p: 5,
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item md={7} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img width="100px" src={fooicon} alt="" />
                <Typography
                  fontFamily="Josefin Sans"
                  sx={{
                    fontWeight: 700,
                    fontSize: "43.5489px",
                    lineHeight: "44px",
                  }}
                >
                  Ultra Rich
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={5} xs={12}>
            <Box mt={3}>
              <Typography
                fontFamily="Josefin Sans"
                sx={{
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "20px",
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                Follow Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 3,
                  justifyContent: { xs: "center", md: "start" },
                }}
              >
                <img src={tele} alt="" width="20px" height="20px" />
                <img src={discord} alt="" width="20px" height="20px" />
                <img src={fb} alt="" width="20px" height="20px" />
                <img src={reddit} alt="" width="20px" height="20px" />
                <img src={insta} alt="" width="20px" height="20px" />
              </Box>
              <Typography
                fontFamily="Josefin Sans"
                mt={3}
                sx={{
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "18px",
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                All rights reserved @Ultrarich 2021
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
