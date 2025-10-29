import React, { useState } from "react";
import { Modal, IconButton, Box, Backdrop, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const Certificate = ({ ImgSertif }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box component="div" sx={{ width: "100%" }}>
      {/* Thumbnail Container */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 3,
          boxShadow: "0 8px 24px rgba(255,192,203,0.25)",
          border: "1px solid rgba(255,182,193,0.3)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "linear-gradient(135deg, #fffafc 0%, #fef3f7 100%)",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 12px 28px rgba(255,182,193,0.4)",
            "& .overlay": { opacity: 1 },
            "& .hover-content": { transform: "translate(-50%, -50%)", opacity: 1 },
            "& .certificate-image": {
              filter: "contrast(1.05) brightness(1) saturate(1.15)",
            },
          },
        }}
      >
        {/* Certificate Image */}
        <Box sx={{ position: "relative" }}>
          <img
            className="certificate-image"
            src={ImgSertif}
            alt="Certificate"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              filter: "contrast(1.05) brightness(0.96) saturate(1.05)",
              transition: "filter 0.3s ease",
              cursor: "pointer",
            }}
            onClick={handleOpen}
          />
        </Box>

        {/* Hover Overlay */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0,
            transition: "opacity 0.4s ease",
            background: "linear-gradient(135deg, rgba(255,192,203,0.25), rgba(255,255,255,0.2))",
            backdropFilter: "blur(4px)",
            borderRadius: "12px",
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={handleOpen}
        >
          {/* Hover Content */}
          <Box
            className="hover-content"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -60%)",
              opacity: 0,
              transition: "all 0.4s ease",
              textAlign: "center",
              color: "#e91e63",
            }}
          >
            <FullscreenIcon
              sx={{
                fontSize: 42,
                mb: 1,
                color: "#e91e63",
                filter: "drop-shadow(0 3px 6px rgba(233,30,99,0.3))",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#d81b60",
                textShadow: "0 2px 4px rgba(255,192,203,0.4)",
              }}
            >
              View Certificate
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: {
            background: "linear-gradient(135deg, rgba(255,192,203,0.3), rgba(255,255,255,0.05))",
            backdropFilter: "blur(8px)",
          },
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "auto",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "#fff",
              bgcolor: "rgba(233,30,99,0.4)",
              backdropFilter: "blur(4px)",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(233,30,99,0.6)",
                transform: "scale(1.1)",
              },
            }}
            size="large"
          >
            <CloseIcon sx={{ fontSize: 26 }} />
          </IconButton>

          {/* Modal Image */}
          <img
            src={ImgSertif}
            alt="Certificate Full View"
            style={{
              display: "block",
              maxWidth: "100%",
              maxHeight: "90vh",
              margin: "0 auto",
              objectFit: "contain",
              borderRadius: "10px",
              boxShadow: "0 8px 24px rgba(255,182,193,0.3)",
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificate;
