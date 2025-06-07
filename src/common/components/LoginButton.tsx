import { Button } from "@mui/material";
import { getSpotifyAuthUrl } from "../../utils/auth";

console.log("🔥 PROD CLIENT_ID →", import.meta.env.VITE_SPOTIFY_CLIENT_ID);
console.log("🔥 PROD REDIRECT_URI →", import.meta.env.VITE_SPOTIFY_REDIRECT_URI);

const LoginButton = () => {
  const login = () => {
    getSpotifyAuthUrl();
  };

  return (
    <Button variant="contained" color="secondary" size="large" onClick={login}>
      Login
    </Button>
  );
};

export default LoginButton;
