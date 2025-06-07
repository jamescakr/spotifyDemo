import { Box, Avatar, IconButton } from "@mui/material";
import LoginButton from "../../common/components/LoginButton";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";

const Navbar = () => {
  const { data: userProfile } = useGetCurrentUserProfile();

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      height="64px"
      px={2}
    >
      {userProfile ? (
        <IconButton size="large">
          <Avatar
            src={userProfile.images[0]?.url}
            alt={userProfile.display_name ?? "User"}
          />
        </IconButton>
      ) : (
        <LoginButton />
      )}
    </Box>
  );
};

export default Navbar;
