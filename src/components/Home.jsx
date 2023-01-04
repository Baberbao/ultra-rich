import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import homelogo from "../images/homelogo.png";
import bnb from "../images/bnb.png";

export default function Home() {
  const matches = useMediaQuery("(max-width:960px)");

  return (
    <>
      <Container maxWidth="lg">
        <Box
          mt={matches ? 5 : 0}
          display={"flex"}
          flexDirection="column"
          alignItems="center"
        >
          <Box>
            <img
              src={homelogo}
              width={matches ? "90px" : "111px"}
              height={matches ? "90px" : "111px"}
              alt=""
            />
          </Box>
          <Typography
            mt={2}
            sx={{
              fontFamily: "Josefin Sans",
              fontSize: matches ? "20px" : "40px",
              fontWeight: "700",
            }}
          >
            Ultra Rich Staking Dashboard
          </Typography>
          <Box
            mt={2}
            zIndex={1}
            style={{
              cursor: "pointer",
              background:
                "radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 40%)",
              boxShadow: "0px 0px 17px #AD00FF",
            }}
            width="258px"
            height="46px"
            fontWeight="400"
            borderRadius="12px"
            fontSize="14px"
            fontFamily="Josefin Sans"
            color="#ffffff"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            Stake Rich
          </Box>
          <Box mt={3} display="flex" fontFamily="Josefin Sans">
            <Typography mt={1}>Powered by</Typography>
            <Box mx={1}>
              <img src={bnb} style={{ cursor: "pointer" }} alt="" />
            </Box>
            <Typography mt={1}>Binance</Typography>
          </Box>
        </Box>
        <Box px={matches ? 0 : 5.5}>
          <Grid px={matches ? 0 : 1} mt={10} container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  width: matches ? "100%" : "286px",
                  height: "108px",
                  background: "transparent",
                  backdropFilter: "blur(27px)",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 27px 16px rgba(0, 0, 0, 0.25)",
                  border: "1px transparent",
                  backgroundImage:
                    " linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)  ),radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 40%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                  padding: "1px",
                }}
              >
                <Typography
                  mt={2}
                  sx={{
                    color: "#FBFBFB",
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  TOTAL VALUE STAKED
                </Typography>
                <Typography
                  mt={1.5}
                  sx={{
                    color: "#ffffff",
                    fontFamily: "Roboto",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                >
                  $21,610,291
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  width: matches ? "100%" : "286px",
                  height: "108px",
                  background: "transparent",
                  backdropFilter: "blur(27px)",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 27px 16px rgba(0, 0, 0, 0.25)",
                  border: "1px transparent",
                  backgroundImage:
                    " linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)  ),radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 40%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                  padding: "1px",
                }}
              >
                <Typography
                  mt={2}
                  sx={{
                    color: "#FBFBFB",
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Total Withdrawn{" "}
                </Typography>
                <Typography
                  mt={1.5}
                  sx={{
                    color: "#ffffff",
                    fontFamily: "Roboto",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                >
                  $21,610,291
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  width: matches ? "100%" : "286px",
                  height: "108px",
                  background: "transparent",
                  backdropFilter: "blur(27px)",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 27px 16px rgba(0, 0, 0, 0.25)",
                  border: "1px transparent",
                  backgroundImage:
                    " linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)  ),radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 40%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                  padding: "1px",
                }}
              >
                <Typography
                  mt={2}
                  sx={{
                    color: "#FBFBFB",
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Total Users
                </Typography>
                <Typography
                  mt={1.5}
                  sx={{
                    color: "#ffffff",
                    fontFamily: "Roboto",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                >
                  $21,610,291
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
