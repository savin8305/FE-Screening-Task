import {
  Modal,
  Box,
  IconButton,
  ModalProps,
  BoxProps,
  IconButtonProps,
} from "@mui/material";
import React, { FC } from "react";
import { RxCross1 } from "react-icons/rx";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  setRoute?: (route: string) => void;
  component: React.ComponentType<any>;
};
const CustomModal: FC<Props> = ({
  open,
  setOpen,
  setRoute,
  component: Component,
}) => {
  const styles = {
    modalContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modalContent: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "50vh", // Decreased height, adjust as needed
    },
    sideImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "0 0 0.375rem 0",
      transition: "transform 0.5s",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    closeButton: {
      position: "absolute",
      top: "55px",
      right: "120px",
      color: "gray",
      background: "rgba(295, 155, 205, 0.8)",
      "&:hover": {
        background: "rgba(255, 155, 255, 0.9)",
      },
    },
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={styles.modalContainer}
    >
      <Box
        className="w-full rounded-md shadow-lg p-4 outline-none max-w-md mx-auto lg:max-w-2xl xl:max-w-3xl"
        style={styles.modalContent}
      >
        <div className="flex flex-col-reverse lg:flex-row relative">
          <div className="w-full lg:w-2/2 p-4">
            <Component setOpen={setOpen} setRoute={setRoute} />
          </div>
          <RxCross1
            style={{
              marginTop: "2rem",
              color: "red",
              border: "1px solid green",
              fontWeight: "bold",
              fontSize: "2rem",
              cursor: "pointer",
            }}
            onClick={() => setOpen(false)}
          />
        </div>
      </Box>
    </Modal>
  );
};

export default CustomModal;
