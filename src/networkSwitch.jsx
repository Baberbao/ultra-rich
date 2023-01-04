import React from "react";
import { Dialog, DialogContent, Box, Slide } from "@mui/material";
import { withStyles } from "@mui/styles";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledModal = withStyles(() => ({
  root: {
    "& .MuiDialog-root": {
      zIndex: "1301 !important",
    },
    "&.MuiDialog-container": {
      overflowY: "hidden !important",
    },
    "& .MuiDialog-paperScrollPaper": {
      backgroundColor: "#11012F !important",
      height: "auto",
      boxShadow: "black 0px 0px 8px 1px",
      border: "5px solid black",
      borderRadius: "150px",
    },
    "& .dialoge__content__section": {
      background: "#11012F !important",
      // borderRadius: 5,
    },
    "& .MuiDialogContent-root": {
      paddingTop: "20px",
      paddingBottom: "20px",
    },
  },
}))(Dialog);

function NetworkChange({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  const networkHandler = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        // params: [{ chainId: "0x38" }], //BSC Mainnet
        params: [{ chainId: "0x61" }], //BSC Testnet
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="modal__main__container">
        <StyledModal
          open={open}
          keepMounted
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent className="dialoge__content__section">
            <Box
              borderRadius="100px"
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <Box
                borderBottom="5px solid red"
                color="red"
                fontSize="30px"
                fontWeight="600"
              >
                Error!
              </Box>
              <Box component="h3" color="#fff">
                {" "}
                You are on wrong network please switch your network.
              </Box>
              <Box align="center">
                <button
                  style={{
                    background:
                      "radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 40%)",
                    boxShadow: "0px 0px 17px #AD00FF",
                    borderRadius: "34px",
                    padding: "15px 20px",
                    border: "none",
                    outline: "none",
                    color: "#000000",
                    cursor: "pointer",
                    fontSize: "16px",
                    lineHeight: "19px",
                    fontWeight: "bolder",
                    textTransform: "uppercase",
                    marginRight: "10px",
                  }}
                  onClick={networkHandler}
                >
                  Switch Network
                </button>
              </Box>
            </Box>
          </DialogContent>
        </StyledModal>
      </div>
    </div>
  );
}

export default NetworkChange;
