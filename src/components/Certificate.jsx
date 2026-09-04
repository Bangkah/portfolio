import React, { useState } from "react"
import { Modal, IconButton, Box, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"

const Certificate = ({ ImgSertif }) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <Box component="div" sx={{ width: "100%" }}>
            {/* Thumbnail Container Neo-Brutalist */}
            <Box
                onClick={handleOpen}
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "#ffffff",
                    border: "3px solid #111111",
                    boxShadow: "5px 5px 0px #111111",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all 0.15s ease-in-out",
                    "&:hover": {
                        transform: "translate(-2px, -2px)",
                        boxShadow: "7px 7px 0px #111111",
                        "& .overlay": {
                            opacity: 1,
                        },
                        "& .hover-content": {
                            transform: "translate(-50%, -50%)",
                            opacity: 1,
                        },
                    },
                    "&:active": {
                        transform: "translate(2px, 2px)",
                        boxShadow: "3px 3px 0px #111111",
                    },
                }}>
                {/* Certificate Image */}
                <Box sx={{ position: "relative" }}>
                    <img
                        src={ImgSertif}
                        alt="Certificate"
                        style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            objectFit: "cover",
                            aspectRatio: "16/11.5",
                        }}
                    />
                </Box>

                {/* Hover Overlay Neo-Brutalist */}
                <Box
                    className="overlay"
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(255, 207, 51, 0.85)", // Yellow accent khas Neo-Brutalist
                        opacity: 0,
                        transition: "opacity 0.2s ease-in-out",
                        zIndex: 2,
                    }}>
                    {/* Hover Content */}
                    <Box
                        className="hover-content"
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -40%)",
                            opacity: 0,
                            transition: "all 0.2s ease-in-out",
                            textAlign: "center",
                            width: "90%",
                            color: "#111111",
                        }}>
                        <FullscreenIcon
                            sx={{
                                fontSize: 44,
                                mb: 0.5,
                                color: "#111111",
                            }}
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 800,
                                textTransform: "uppercase",
                                fontSize: "0.95rem",
                                letterSpacing: "0.05em",
                            }}>
                            View Certificate
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Modal Neo-Brutalist */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-certificate-title"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                    "& .MuiBackdrop-root": {
                        backgroundColor: "rgba(17, 17, 17, 0.75)",
                        backdropFilter: "blur(2px)",
                    },
                }}>
                <Box
                    sx={{
                        position: "relative",
                        maxWidth: "90vw",
                        maxHeight: "90vh",
                        backgroundColor: "#ffffff",
                        border: "4px solid #111111",
                        boxShadow: "10px 10px 0px #111111",
                        borderRadius: "4px",
                        p: 1.5,
                        outline: "none",
                    }}>
                    {/* Close Button Neo-Brutalist */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            right: -14,
                            top: -14,
                            color: "#111111",
                            backgroundColor: "#ff5c58", // Red accent
                            border: "3px solid #111111",
                            boxShadow: "3px 3px 0px #111111",
                            zIndex: 10,
                            padding: "6px",
                            "&:hover": {
                                backgroundColor: "#ff3b30",
                                transform: "translate(-1px, -1px)",
                                boxShadow: "4px 4px 0px #111111",
                            },
                            "&:active": {
                                transform: "translate(1px, 1px)",
                                boxShadow: "1px 1px 0px #111111",
                            },
                        }}>
                        <CloseIcon sx={{ fontSize: 22, fontWeight: "bold" }} />
                    </IconButton>

                    {/* Modal Image */}
                    <img
                        src={ImgSertif}
                        alt="Certificate Full View"
                        style={{
                            display: "block",
                            maxWidth: "100%",
                            maxHeight: "80vh",
                            margin: "0 auto",
                            objectFit: "contain",
                            border: "2px solid #111111",
                        }}
                    />
                </Box>
            </Modal>
        </Box>
    )
}

export default Certificate