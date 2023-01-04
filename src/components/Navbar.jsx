import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../utils";
import logo from "../images/logo.png";

export default function Navbar() {
  const { account, connect, disconnect } = useContext(AppContext);
  return (
    <>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Box display="flex" justifyContent="center">
              <img src={logo} width="57px" height="57px" alt="" />
            </Box>
            <Typography
              sx={{
                fontFamily: "Josefin Sans",
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              Ultra Rich
            </Typography>
          </Box>

          <Box>
            {account ? (
              <Box
                width="177px"
                height="42px"
                borderRadius="28px"
                sx={{
                  cursor: "pointer",
                  background:
                    "radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 40%)",
                  boxShadow: "0px 0px 17px #AD00FF",
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="#ffffff"
                fontWeight="400"
                fontSize="14px"
                onClick={() => disconnect()}
                style={{ zIndex: 1 }}
              >
                {account.slice(0, 4) + "..." + account.slice(-4)}
              </Box>
            ) : (
              <Box
                zIndex={1}
                style={{
                  cursor: "pointer",
                  background:
                    "radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 40%)",
                  boxShadow: "0px 0px 17px #AD00FF",
                }}
                width="177px"
                height="42px"
                fontWeight="400"
                borderRadius="28px"
                fontSize="14px"
                fontFamily="Josefin Sans"
                color="#ffffff"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={() => connect()}
              >
                Connect Wallet
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}
