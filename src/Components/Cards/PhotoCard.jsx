import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setImageIndex, setShowPopUp } from "../../reducers/general";

export default function PhotoCard({ data, index }) {
  const { largeImageURL } = data;

  const dispatch = useDispatch();
  const indexOfImageInPopUp = useSelector(
    state => state.general.indexOfImageInPopUp
  );

  const handleClick = () => {
    // Check if this card is already selected
    if (index === indexOfImageInPopUp) {
      // If already selected, show the PopUp
      dispatch(setShowPopUp(true));
    } else {
      // If not selected, update the image index
      dispatch(setImageIndex(index));
    }
  };

  return (
    <Card
      onClick={handleClick}
      sx={{ maxWidth: 200, margin: "auto", padding: "none" }}
    >
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
  data: PropTypes.object,
  index: PropTypes.number,
};
