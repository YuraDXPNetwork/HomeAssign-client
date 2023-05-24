import { Grid } from "@mui/material";
import PhotoCard from "./PhotoCard";
import PropTypes from "prop-types";

export default function Cards({ photos }) {
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={1}>
      {/* Render PhotoCard component for each photo */}
      {photos?.map((photo, index) => (
        <Grid key={photo.id} item xs={12} sm={6} md={4}>
          <PhotoCard index={index} data={photo} />
        </Grid>
      ))}
    </Grid>
  );
}

Cards.propTypes = {
  photos: PropTypes.array,
};
