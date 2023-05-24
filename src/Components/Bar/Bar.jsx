import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setImages,
  setShowTypesPopUp,
} from "../../reducers/general";
import { server } from "../../assets/consts";

export default function Bar() {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.general.currentPage);

  const handleTypeSelection = () => {
    dispatch(setShowTypesPopUp(true));
  };

  const handleButtonClick = async button => {
    try {
      dispatch(
        setCurrentPage(button === "next" ? currentPage + 1 : currentPage - 1)
      );
      const response = await server.get(`/${button}`, {
        params: {
          page: currentPage, // Replace `currentPage` with the actual current page number
        },
      });
      const data = response.data;
      dispatch(setImages(data));
      // Process the data as needed
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "16px",
      }}
    >
      <Button
        disabled={currentPage === 1}
        variant="contained"
        onClick={() => handleButtonClick("prev")}
      >
        Prev
      </Button>
      <Button onClick={handleTypeSelection} variant="contained">
        Select Type
      </Button>
      <Button onClick={() => handleButtonClick("next")} variant="contained">
        Next
      </Button>
    </Box>
  );
}
