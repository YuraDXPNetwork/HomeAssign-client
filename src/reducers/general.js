import { createSlice } from "@reduxjs/toolkit";

const initialState = {
popUp:false,
typesPopUp: false,
indexOfImageInPopUp:null,
type: "sports",
currentPage: 1,
images: []
}

const general = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setImages(state, action){
      state.images = action.payload
    },
    setCurrentPage(state, action){
        state.currentPage = action.payload;
    },
    setShowPopUp(state, action){
        state.popUp = action.payload;
    },
    setImageIndex(state, action){
        state.indexOfImageInPopUp = action.payload
    },
    setType(state, action){
        state.type = action.payload
    },
    setShowTypesPopUp(state, action){
        state.typesPopUp = action.payload
    }
  },
});

export const {
  setImages,
  setShowPopUp,
  setImageIndex,
  setType,
  setShowTypesPopUp,
  setCurrentPage,
} = general.actions;

export default general.reducer;
