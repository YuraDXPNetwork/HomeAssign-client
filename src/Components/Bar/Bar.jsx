import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setShowTypesPopUp } from "../../reducers/general";

export default function Bar() {
  const dispatch = useDispatch();

  const handleTypeSelection = () => {
    dispatch(setShowTypesPopUp(true));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "16px",
      }}
    >
      <Button variant="contained">Prev</Button>
      <Button onClick={handleTypeSelection} variant="contained">
        Select Type
      </Button>
      <Button variant="contained">Next</Button>
    </Box>
  );
}
