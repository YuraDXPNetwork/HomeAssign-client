import { Box, Modal, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { setShowPopUp } from "../../reducers/general";

export default function PopUp({ photos }) {
  // Retrieve the index of the selected image in the pop-up from the Redux store
  const indexOfImageInPopUp = useSelector(
    state => state.general.indexOfImageInPopUp
  );

  // Retrieve the visibility of the pop-up from the Redux store
  const showPopUp = useSelector(state => state.general.popUp);

  const dispatch = useDispatch();

  useEffect(() => {
    // Listen to updates in indexOfImageInPopUp and show the pop-up when an image is selected
    if (indexOfImageInPopUp !== null) {
      dispatch(setShowPopUp(true));
    }
    return () => {
      // Add any necessary cleanup logic here
    };
  }, [indexOfImageInPopUp, dispatch]);

  return (
    <Modal
      open={showPopUp}
      onClose={() => dispatch(setShowPopUp(false))}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          borderRadius: "30px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 500,
            height: 500,
          },
        }}
      >
        <Paper sx={{ overflow: "scroll" }} elevation={3}>
          {photos && indexOfImageInPopUp !== null
            ? // Render the details of the selected image
              Object.entries(photos[indexOfImageInPopUp]).map(
                ([key, value], index) => (
                  <Typography key={index} p color="initial">
                    <span>{`${key}: `}</span>
                    <span>{value}</span>
                  </Typography>
                )
              )
            : ""}
        </Paper>
      </Box>
    </Modal>
  );
}

PopUp.propTypes = {
  photos: PropTypes.array,
};
