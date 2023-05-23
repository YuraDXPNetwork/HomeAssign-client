import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function Bar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "16px",
      }}
    >
      <Button variant="contained">Prev</Button>
      <Button variant="contained">Next</Button>
    </Box>
  );
}
