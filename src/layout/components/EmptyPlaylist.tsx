import { Button, Card, styled, Typography } from "@mui/material";

const EmptyPlaylistCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: "20px",
  borderRadius: "8px",
}));

const CreatePlaylistButton = styled(Button)({
  marginTop: "30px",
  fontWeight: "700",
});

const EmptyPlaylist = () => {
  return (
    <EmptyPlaylistCard>
      <Typography fontWeight={700}>Create your first playlist</Typography>
      <Typography>It's easy, we'll help you</Typography>
      <CreatePlaylistButton variant="contained" color="secondary">
        Create playlist
      </CreatePlaylistButton>
    </EmptyPlaylistCard>
  );
};

export default EmptyPlaylist;
