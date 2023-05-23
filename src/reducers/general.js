import { createSlice } from "@reduxjs/toolkit";

const initialState = {
popUp:false,
typesPopUp: false,
indexOfImageInPopUp:null,
type: "sports"
}

const general = createSlice({
  name: "counter",
  initialState,
  reducers: {
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

export const { setShowPopUp, setImageIndex, setType, setShowTypesPopUp } = general.actions;

export default general.reducer;
