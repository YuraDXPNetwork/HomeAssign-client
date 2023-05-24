import {
  useGetImagesByCategoryQuery,
  // useGetPhotosByCategoryQuery,
} from "../../service/service";
import Cards from "../Cards/Cards";
import Bar from "../Bar/Bar";
import PopUp from "../PopUp/PopUp";
import Types from "../PopUp/Types";
import { useSelector } from "react-redux";

export default function Main() {
  // Retrieve the selected type from the Redux store
  const type = useSelector(state => state.general.type);
  const images = useSelector(state => state.general.images);
  console.log("🚀 ~ file: Main.jsx:15 ~ Main ~ images:", images);

  // Fetch the photos based on the selected type
  // const { data: photos } = useGetPhotosByCategoryQuery(type);

  const { data: photos } = useGetImagesByCategoryQuery(type);

  return (
    <>
      {/* Render the navigation bar */}
      <Bar />

      {/* Render the photo cards */}
      <Cards photos={images.length ? images : photos} />

      {/* Render the pop-up */}
      <PopUp photos={images.length ? images : photos} />

      {/* Render the types pop-up */}
      <Types />
    </>
  );
}
