// import useStyles from "./styles";
import Grid from "@mui/material/Grid";
import { SPORTS } from "../../assets/consts";
import { useGetPhotosByCategoryQuery } from "../../service/service";

export default function Main() {
  const { data: photos } = useGetPhotosByCategoryQuery(SPORTS);

  console.log("🚀 ~ file: Main.jsx:8 ~ Main ~ data:", photos.hits);

  return (
    <Grid container alignItems="stretch" spacing={3}>
      {photos?.hits.map(e => (
        <Grid key={e.id} item xs={12} sm={6}>
          <p>{e.id}</p>
        </Grid>
      ))}
    </Grid>
  );
}
