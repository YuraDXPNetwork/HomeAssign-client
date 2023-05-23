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
    // We need to check first if this card is already selected
    // Because if it is, the isEffect in PopUp component will not fire
    // If indexes are equal, we just need to set pupUp to true
    if (index === indexOfImageInPopUp) dispatch(setShowPopUp(true));
    dispatch(setImageIndex(index));
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
