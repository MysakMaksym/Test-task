import { combineReducers } from "redux";
import apartments, * as fromApartments from "./apartments.js";

export default combineReducers({
  apartments,
});

export const getApartments = (state) =>
  fromApartments.getApartments(state.apartments);
