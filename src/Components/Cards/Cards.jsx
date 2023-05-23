import { Grid } from "@mui/material";
import PhotoCard from "./PhotoCard";
import PropTypes from "prop-types";

export default function Cards({ photos }) {
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={1}>
      {photos?.map((e, index) => (
        <Grid key={e.id} item xs={12} sm={6} md={4}>
          <PhotoCard index={index} key={e.id} data={e} />
        </Grid>
      ))}
    </Grid>
  );
}
Cards.propTypes = {
  photos: PropTypes.array,
};
