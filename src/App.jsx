import "./App.css";
import { Container } from "@mui/material";
import Main from "./Components/Main/Main";
import { useGetPhotosByCategoryQuery } from "./service/service";
import { CircularProgress } from "@material-ui/core";
import { SPORTS } from "./assets/consts";

function App() {
  const { data } = useGetPhotosByCategoryQuery(SPORTS);

  return !data ? (
    <CircularProgress />
  ) : (
    <>
      <Container maxWidth="lg">
        <Main />
      </Container>
    </>
  );
}

export default App;
