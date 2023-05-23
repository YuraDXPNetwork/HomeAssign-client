// import useStyles from "./styles";
import { SPORTS } from "../../assets/consts";
import { useGetPhotosByCategoryQuery } from "../../service/service";
import Cards from "../Cards/Cards";
import Bar from "../Bar/Bar";

export default function Main() {
  const { data: photos } = useGetPhotosByCategoryQuery(SPORTS);
  return (
    <>
      <Bar />
      <Cards photos={photos} />
    </>
  );
}
