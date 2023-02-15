// import {
//   FETCH_ALL_SONG_SUCCESS,
//   FETCH_NEW_SONG_SUCCESS,
// } from "../helpers/actionTypes";

export const apartments = (state = [], action) => {
  switch (action.type) {
    case "FETCH_APARTMENTS_SUCCESS":
      return action.apartments;
    case "FETCH_NEW_APARTMENT_SUCCESS":
      return [...state, action.apartment];
    case "FETCH_DELETE_APARTMENT_SUCCESS":
      console.log(action);
      console.log(state);
      return state.filter((element) => element._id !== action.apartmentId);
    default:
      return state;
  }
};

export const getApartments = (state) => state;

export default apartments;
