import { useGetPhotosByCategoryQuery } from "../../service/service";
import Cards from "../Cards/Cards";
import Bar from "../Bar/Bar";
import PopUp from "../PopUp/PopUp";
import Types from "../PopUp/Types";
import { useSelector } from "react-redux";

export default function Main() {
  // Retrieve the selected type from the Redux store
  const type = useSelector(state => state.general.type);

  // Fetch the photos based on the selected type
  const { data: photos } = useGetPhotosByCategoryQuery(type);

  return (
    <>
      {/* Render the navigation bar */}
      <Bar />

      {/* Render the photo cards */}
      <Cards photos={photos?.hits} />

      {/* Render the pop-up */}
      <PopUp photos={photos?.hits} />

      {/* Render the types pop-up */}
      <Types />
    </>
  );
}
