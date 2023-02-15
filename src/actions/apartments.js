// import {
//     FETCH_ALL_SONG_START,
//     FETCH_ALL_SONG_SUCCESS,
//     FETCH_ALL_SONG_FAILED,
//     FETCH_NEW_SONG_START,
//     FETCH_NEW_SONG_SUCCESS,
//     FETCH_NEW_SONG_FAILED,
//   } from "../helpers/actionTypes.js";
import * as fromApi from "../api/apartments.js";

//   const fetchAllSongsStart = () => ({ type: FETCH_ALL_SONG_START });
const fetchApartmentsSuccess = (apartments) => ({
  type: "FETCH_APARTMENTS_SUCCESS",
  apartments,
});
//   const fetchAllSongsFailed = () => ({ type: FETCH_ALL_SONG_FAILED });

export const fetchApartments = () => async (dispatch) => {
  //dispatch(fetchAllSongsStart());
  const apartments = await fromApi.fetchApartments();
  if (apartments.error) {
    //dispatch(fetchAllSongsFailed());
  } else {
    const action = fetchApartmentsSuccess(apartments);
    dispatch(action);
  }
};

// const fetchNewSongStart = () => ({ type: FETCH_NEW_SONG_START });

const fetchNewApartmentSuccess = (apartment) => ({
  type: "FETCH_NEW_APARTMENT_SUCCESS",
  apartment,
});

export const fetchNewApartment = (apartment) => async (dispatch) => {
  //dispatch(fetchAllSongsStart());
  const newApartment = await fromApi.fetchNewApartment(apartment);
  if (newApartment.error) {
    //dispatch(fetchAllSongsFailed());
  } else {
    dispatch(fetchNewApartmentSuccess(newApartment));
  }
};

const fetchDeleteApartmentSuccess = (apartmentId) => ({
  type: "FETCH_DELETE_APARTMENT_SUCCESS",
  apartmentId,
});

export const fetchDeleteApartment = (apartmentId) => async (dispatch) => {
  //dispatch(fetchAllSongsStart());
  console.log("action");
  const deleteApartment = await fromApi.fetchDeleteApartment(apartmentId);
  if (deleteApartment.error) {
    //dispatch(fetchAllSongsFailed());
  } else {
    dispatch(fetchDeleteApartmentSuccess(apartmentId));
  }
};
