import { styled } from "@mui/material";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const PlayButtonContainer = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: "none",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  "&:focus": {
    outline: "none",
  },
}));

const PlayButton: React.FC = () => {
  return (
    <PlayButtonContainer>
      <PlayCircleIcon />
    </PlayButtonContainer>
  );
};

export default PlayButton;
