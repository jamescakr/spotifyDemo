import { Grid, Typography } from "@mui/material";
import useGetNewRelease from "../../../hooks/useGetNewRelease";
import LoadingSpinner from "../../../common/components/LoadingSpinner";
import ErrorMessage from "../../../common/components/ErrorMessage";
import Card from "../../../common/components/Card";

const NewReleases = () => {
  const { data, error, isLoading } = useGetNewRelease();

  console.log("data??", data);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage errorMessage={error.message} />;
  }

  return (
    <div>
      <Typography variant="h1" paddingTop="8px">
        NewReleases
      </Typography>
      {data && data.albums.items.length > 0 ? (
        <Grid container spacing={2}>
          {data.albums.items.map((album) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={album.id}>
              <Card
                name={album.name}
                artistName={album.artists.map((artist) => artist.name).join(", ")}
                image={album.images[0].url}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h2">No Data</Typography>
      )}
    </div>
  );
};

export default NewReleases;
