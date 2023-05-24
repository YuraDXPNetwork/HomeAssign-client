import "./App.css";
import { Container } from "@mui/material";
import Main from "./Components/Main/Main";
import { useGetImagesByCategoryQuery } from "./service/service";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

function App() {
  const type = useSelector(state => state.general.type);
  const { data } = useGetImagesByCategoryQuery(type);

  return !data ? (
    <CircularProgress />
  ) : (
    <>
      <Container maxWidth="sm">
        <Main />
      </Container>
    </>
  );
}

export default App;
