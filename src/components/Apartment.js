import { connect } from "react-redux";
import { fetchDeleteApartment } from "../actions/apartments";
import "../styles/Apartment.scss";

function Apartment({ data, fetchDeleteApartment }) {
  const deleteRent = () => {
    fetchDeleteApartment(data._id);
  };

  return (
    <div className="Apartment">
      <div className="apartmentInfo">
        <span className="apartmentName"> {data.name} </span>
        <div className="apartmentDescription">
          <span>Description:</span>
          <span> {data.description} </span>
        </div>
        <span>Rooms number: {data.rooms} </span>
        <span>Price: {data.price} $</span>
      </div>
      <div className="rentNDeleteButtons">
        <button className="rentButton" type="button">
          Rent
        </button>
        <button className="deleteRentButton" type="button" onClick={deleteRent}>
          Delete
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeleteApartment: (apartmentId) =>
      dispatch(fetchDeleteApartment(apartmentId)),
  };
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(Apartment);
