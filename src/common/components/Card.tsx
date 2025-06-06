import { Typography } from "@mui/material";

interface CardProps {
  image: string;
  name: string;
  artistName: string | undefined;
}

const Card = ({ image, name, artistName }: CardProps) => {
  return (
    <div>
      <img src={image} />
      <Typography>{name}</Typography>
      <Typography>{artistName}</Typography>
    </div>
  );
};

export default Card;
