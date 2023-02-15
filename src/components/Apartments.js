import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Apartment from "./Apartment.js";
import "../styles/Apartments.scss";
import { getApartments } from "../reducers";
import { fetchApartments } from "../actions/apartments";

function Apartments({ apartments, fetchApartments }) {
  const [filterOption, setFilterOption] = useState(0);

  const [sortOption, setSortOption] = useState("highestPrice");

  useEffect(() => {
    if (apartments.length === 0) {
      fetchApartments();
    }
  }, [apartments]);

  let sortedApartments = [];

  if (sortOption === "highestPrice") {
    sortedApartments = [...apartments].sort((a, b) => b.price - a.price);
  } else if (sortOption === "lowestPrice") {
    sortedApartments = [...apartments].sort((a, b) => a.price - b.price);
  }

  if (filterOption) {
    sortedApartments = sortedApartments.filter(
      (element) => element.rooms == filterOption
    );
  }

  return (
    <div className="Apartments">
      <div className="apartmentsHeader">
        <h3 className="header">Available Apartments</h3>
        <div className="roomFilter">
          <span>Filter by rooms: </span>
          <input
            type="number"
            min={1}
            onChange={(event) => setFilterOption(event.target.value)}
          />
        </div>
        <select
          className="dropdownFilter"
          onChange={(event) => setSortOption(event.target.value)}
        >
          <option value="lowestPrice">lowest to highest</option>
          <option value="highestPrice" selected="selected">
            highest to lowest
          </option>
        </select>
      </div>
      {sortedApartments.map((item) => (
        <Apartment data={item} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({ apartments: getApartments(state) });
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApartments: () => dispatch(fetchApartments()),
  };
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(Apartments);
