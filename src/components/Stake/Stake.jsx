import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bg from "./assests/bg1.png";
// import bg from "./assests/stakeBg.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import busd from "./assests/busd.png";
import earth from "./assests/earth.png";
import Tablepage from "../Table/Tablepage";

const Stake = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container mxwidth="lg">
        <Typography
          sx={{
            fontFamily: "Josefin Sans",
            fontWeight: 700,
            fontSize: "32px",
            color: "#FFFFFF",
            pt: 10,
          }}
        >
          STAKE TO EARN
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "72%",
          }}
        >
          <img src={earth} alt="" />
        </Box>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "-40px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={7.7}
            sx={{
              borderRadius: "9px",
              border: "1px transparent",
              backgroundImage:
                " linear-gradient(black, black  ),linear-gradient(94.21deg, #1C84FE 17.52%, #BD4BC8 43.59%, #1C84FE 89.08%, #BD4BC8 110.16%)",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
              p: 0.4,
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                sx={{
                  fontFamily: "Josefin Sans",
                  fontWeight: 700,
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  my: 1,
                }}
              >
                Max
              </Typography>
              <Box
                sx={{
                  borderRadius: "9px",
                  border: "1px transparent",
                  backgroundImage:
                    " linear-gradient(black, black  ),linear-gradient(94.21deg, #1C84FE 17.52%, #BD4BC8 43.59%, #1C84FE 89.08%, #BD4BC8 110.16%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                  p: 0.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  sx={{
                    background:
                      "radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 40%)",
                    borderRadius: "5px",
                    fontSize: "12px",
                    color: "#ffffff",
                    width: "103px",
                  }}
                >
                  Amount
                </Button>
                <Typography
                  sx={{
                    fontFamily: "Josefin Sans",
                    fontWeight: 700,
                    fontSize: "12px",
                    m: 0.5,
                  }}
                >
                  100,000,000
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  my: 2,
                }}
              >
                <ArrowDownwardIcon sx={{ fontSize: "2rem" }} />
              </Box>
              <Box
                sx={{
                  borderRadius: "9px",
                  border: "1px transparent",
                  backgroundImage:
                    " linear-gradient(black, black  ),linear-gradient(94.21deg, #1C84FE 17.52%, #BD4BC8 43.59%, #1C84FE 89.08%, #BD4BC8 110.16%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                  p: 0.5,
                }}
              >
                <Box sx={{ p: 1 }}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "12px",
                    }}
                  >
                    180 Days
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Josefin Sans",
                  fontWeight: 700,
                  fontSize: "20px",
                  background:
                    " radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 100%) ",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 5,
                }}
              >
                BONUS TOKENS : 0.00
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 1,
                  mb: 1.5,
                }}
              >
                <Button
                  sx={{
                    fontFamily: "Josefin Sans",
                    fontWeight: 700,
                    fontSize: "12px",
                    color: "#FFFFFF",
                    width: "250px",
                    background:
                      "radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 40%)",
                    boxShadow: "0px 0px 17px #AD00FF",
                    borderRadius: "51px",
                    gap: 1,
                  }}
                >
                  Stake
                  <img src={busd} alt="" />
                  Busd
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{
              borderRadius: "9px",
              background: "transparent",
              backdropFilter: "blur(4px)",
              border: "1px ",
              backgroundImage:
                " linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)),linear-gradient(94.21deg, #1C84FE 17.52%, #BD4BC8 43.59%, #1C84FE 89.08%, #BD4BC8 110.16%)",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
              p: 0.4,
              mt: { xs: "20px", md: "0px" },
            }}
          >
            <Box sx={{ py: "12px" }}>
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    borderRadius: "9px",
                    border: "1px transparent",
                    backgroundImage:
                      " linear-gradient(black, black  ),linear-gradient(94.21deg, #1C84FE 17.52%, #BD4BC8 43.59%, #1C84FE 89.08%, #BD4BC8 110.16%)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                    p: 0.1,
                  }}
                >
                  <Box
                    sx={{
                      p: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ color: "#fffffff", fontSize: "14px" }}>
                      Busd Balance
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fffffff",
                        fontSize: "24px",
                        fontWeight: 700,
                      }}
                    >
                      00000
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    borderRadius: "9px",
                    border: "1px transparent",
                    backgroundImage:
                      " linear-gradient(black, black  ),linear-gradient(94.21deg, #1C84FE 17.52%, #BD4BC8 43.59%, #1C84FE 89.08%, #BD4BC8 110.16%)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                    p: 0.1,
                  }}
                >
                  <Box
                    sx={{
                      p: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ color: "#fffffff", fontSize: "14px" }}>
                      Busd Staked
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fffffff",
                        fontSize: "24px",
                        fontWeight: 700,
                      }}
                    >
                      00000
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    borderRadius: "9px",
                    border: "1px transparent",
                    backgroundImage:
                      " linear-gradient(black, black  ),linear-gradient(94.21deg, #1C84FE 17.52%, #BD4BC8 43.59%, #1C84FE 89.08%, #BD4BC8 110.16%)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                    p: 0.1,
                  }}
                >
                  <Box
                    sx={{
                      p: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ color: "#fffffff", fontSize: "14px" }}>
                      Busd Withdrawn{" "}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fffffff",
                        fontSize: "24px",
                        fontWeight: 700,
                      }}
                    >
                      00000
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Tablepage />
    </Box>
  );
};

export default Stake;
