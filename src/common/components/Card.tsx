import { styled, Typography } from "@mui/material";
import PlayButton from "./PlayButton";

const CardContainer = styled("div")(({ theme }) => ({
  minWidth: "160px",
  width: "100%",
  height: "100%",
  padding: "8px",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:hover .overlay": {
    opacity: 1,
  },
}));

const AlbumImage = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  marginBottom: "8px",
});

const TwoLineEllipsis = styled(Typography)({
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const Overlay = styled("div")({
  position: "absolute",
  bottom: "20px",
  left: "8px",
  opacity: 0,
  transform: "translate3d(0px, 0px, 0px)",
  transition: "opacity 0.3s ease-in-out",
});

interface CardProps {
  name: string | undefined;
  artistName?: string | undefined;
  image: string | undefined;
}

const Card = ({ name, artistName, image }: CardProps) => {
  return (
    <CardContainer>
      <div style={{ position: "relative" }}>
        <AlbumImage src={image} />
        <Overlay className="overlay">
          <PlayButton />
        </Overlay>
      </div>

      <TwoLineEllipsis variant="h2">{name || "No name"}</TwoLineEllipsis>

      <TwoLineEllipsis variant="body1" color="text.secondary">
        {artistName || "No artist"}
      </TwoLineEllipsis>
    </CardContainer>
  );
};

export default Card;
