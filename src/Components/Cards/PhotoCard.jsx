import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";

export default function PhotoCard({ data }) {
  const { largeImageURL } = data;
  console.log("🚀 ~ file: PhotoCard.jsx:11 ~ PhotoCard ~ previewURL:", data);
  return (
    <Card sx={{ maxWidth: 200, margin: "auto", padding: "none" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={largeImageURL}
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}

PhotoCard.propTypes = {
  data: PropTypes.array,
};
