// import useStyles from "./styles";
import { SPORTS } from "../../assets/consts";
import { useGetPhotosByCategoryQuery } from "../../service/service";
import Cards from "../Cards/Cards";
import Bar from "../Bar/Bar";
import PopUp from "../PopUp/PopUp";
import { useEffect } from "react";
import Types from "../PopUp/Types";
import { useSelector } from "react-redux";

export default function Main() {
  const type = useSelector(state => state.general.type);
  const { data: photos } = useGetPhotosByCategoryQuery(type);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Bar />
      <Cards photos={photos?.hits} />
      <PopUp photos={photos?.hits} />
      <Types />
    </>
  );
}
