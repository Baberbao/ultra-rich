import {
  Box,
  useMediaQuery,
  Button,
  Container,
  Typography,
  Grid,
  TextField,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Slider,
} from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Web3 from "web3";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import earth2 from "../Stake/assests/earth2.png";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    paddingTop: "10px",
    paddingBottom: "10px",
    // borderColor: "rgba(255, 255, 255, 0.47)",
    // borderImage:
    //   "radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 100%) 1",
    // borderWidth: "4px",
    // borderStyle: " solid",
    borderBottom: "1px solid #1C84FEa1",
  },

  [`&.${tableCellClasses.body}`]: {
    paddingTop: "7px",
    paddingBottom: "7px",
    borderColor: "rgba(255, 255, 255, 0.47)",
  },
}));

function Tablepage() {
  return (
    <Box mt={5} pb={10}>
      {/* -------------Table box----------------- */}
      <Container maxWidth="lg">
        <Typography
          textAlign="center"
          color="#ffffff"
          fontFamily="Josefin Sans"
          sx={{ fontWeight: 700, fontSize: "32px", lineHeight: "32px" }}
        >
          Ultra Rich
        </Typography>
        <Box bgcolor="#2C2B3B" borderRadius="20px">
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              background: "none",
              mt: 5,
              borderRadius: "20px",
              border: "1px transparent",
              backgroundImage:
                " linear-gradient(black, black  ),linear-gradient(94.21deg, #1C84FE 17.52%, #BD4BC8 43.59%, #1C84FE 89.08%, #BD4BC8 110.16%)",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
              p: 0.4,
              position: "relative",
              zIndex: 1,
            }}
          >
            <Table sx={{ minWidth: 750 }}>
              <TableHead>
                <TableRow
                  sx={{
                    background: "transparent",
                  }}
                >
                  <StyledTableCell>
                    <Typography
                      color="#fff"
                      fontWeight="700"
                      fontSize="16px"
                      textAlign="center"
                      fontFamily="Josefin Sans"
                    >
                      Staked Amount
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography
                      color="#fff"
                      fontWeight="700"
                      textAlign="center"
                      fontSize="16px"
                      fontFamily="Josefin Sans"
                    >
                      End time
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography
                      color="#fff"
                      textAlign="center"
                      fontWeight="700"
                      fontFamily="Josefin Sans"
                      fontSize="16px"
                    >
                      Next Claim Time
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography
                      color="#fff"
                      textAlign="center"
                      fontWeight="700"
                      fontFamily="Josefin Sans"
                      fontSize="16px"
                    >
                      Claimable Dividends
                    </Typography>
                  </StyledTableCell>

                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <StyledTableCell>
                    <Typography
                      color="#fff"
                      textAlign="center"
                      fontFamily="Josefin Sans"
                      fontSize="16px"
                    >
                      0
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography
                      color="#fff"
                      textAlign="center"
                      fontFamily="Josefin Sans"
                      fontSize="16px"
                    >
                      0
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography
                      color="#fff"
                      textAlign="center"
                      fontFamily="Josefin Sans"
                      fontSize="16px"
                    >
                      0
                    </Typography>
                  </StyledTableCell>

                  <StyledTableCell>
                    <Typography
                      color="#fff"
                      textAlign="center"
                      fontFamily="Josefin Sans"
                      fontSize="16px"
                    >
                      0
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Box display="flex" justifyContent="flex-end">
                      <Button
                        fontFamily="Josefin Sans"
                        sx={{
                          background:
                            "radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 40%)",
                          boxShadow: "0px 0px 17px #AD00FF",
                          color: "#fff",
                          fontSize: "12px",
                          px: 5,
                          "&:hover": {
                            background:
                              "radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 100%)",
                          },
                          borderRadius: "29px",
                        }}
                      >
                        Claim
                      </Button>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-start"
                    >
                      <Button
                        fontFamily="Josefin Sans"
                        sx={{
                          background:
                            "radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 40%)",
                          boxShadow: "0px 0px 17px #AD00FF",
                          color: "#fff",
                          px: 5,
                          "&:hover": {
                            background:
                              "radial-gradient(145.24% 943.2% at 7.91% 50%, #BD4BC8 0%, #1C84FE 40%)",
                            boxShadow: "0px 0px 17px #AD00FF",
                          },
                          fontSize: "12px",
                        }}
                      >
                        Compound
                      </Button>
                    </Box>
                  </StyledTableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ position: "relative" }}>
            <img
              style={{
                position: "absolute",
                left: "0px",
                top: "-40px",
              }}
              src={earth2}
              alt=""
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Tablepage;
