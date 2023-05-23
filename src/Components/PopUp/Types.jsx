import { Box, Modal, Paper, ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import { types } from "../../assets/consts";
import { useDispatch, useSelector } from "react-redux";
import { setShowTypesPopUp, setType } from "../../reducers/general";

export default function Types() {
  const dispatch = useDispatch();
  const show = useSelector(state => state.general.typesPopUp);

  const handleClick = type => {
    dispatch(setType(type));
    dispatch(setShowTypesPopUp(false));
  };

  return (
    <Modal
      open={show}
      onClose={() => dispatch(setShowTypesPopUp(false))}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          "& > :not(style)": {
            m: 1,
            width: 200,
            height: 200,
          },
        }}
      >
        <Paper
          style={{ margin: " 0 auto" }}
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            {types.map((e, index) => (
              <Button
                onClick={() => handleClick(e)}
                orientation="vertical"
                key={index}
                variant="contained"
                color="primary"
                aria-label="vertical contained button group"
              >
                {e}
              </Button>
            ))}
          </ButtonGroup>
        </Paper>
      </Box>
    </Modal>
  );
}
