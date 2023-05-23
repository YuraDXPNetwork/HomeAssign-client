import { Box, Modal, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { setShowPopUp } from "../../reducers/general";

export default function PopUp({ photos }) {
  const index = useSelector(state => state.general.indexOfImageInPopUp);
  const show = useSelector(state => state.general.popUp);

  const dispatch = useDispatch();

  useEffect(() => {
    //Here we listen to index updates from PhotoCard component
    if (index != null) dispatch(setShowPopUp(true));
    return () => {};
  }, [index]);

  return (
    <Modal
      open={show}
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
          {photos && index !== null
            ? Object.entries(photos[index]).map(e => (
                <Typography key={e.id} p color="initial">
                  <span>{`${e[0]}: `}</span>
                  <span>{e[1]}</span>
                </Typography>
              ))
            : ""}
        </Paper>
      </Box>
    </Modal>
  );
}

PopUp.propTypes = {
  photos: PropTypes.array,
};
