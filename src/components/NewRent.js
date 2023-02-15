import { useState } from "react";
import { fetchNewApartment } from "../actions/apartments";
import { connect } from "react-redux";
import "../styles/NewRent.scss";

function NewRent({ fetchNewApartment }) {
  const [disabledButton, setDisabledButton] = useState(true);

  const [apartmentInfo, setApartmentInfo] = useState({
    name: "",
    rooms: 0,
    description: "",
    price: 0,
  });

  const sendForm = (event) => {
    event.preventDefault();
    if (apartmentInfo.name) {
      fetchNewApartment(apartmentInfo);
    }
  };

  return (
    <div className="NewRent">
      <h3 className="newRentHeader">Create new rent</h3>
      <form className="newRentForm">
        <div className="name">
          <span>Apartment name: </span>
          <input
            type="text"
            maxLength={99}
            value={apartmentInfo.name}
            onChange={(event) => {
              setApartmentInfo({ ...apartmentInfo, name: event.target.value });
              if (event.target.value) {
                setDisabledButton(false);
              } else {
                setDisabledButton(true);
              }
            }}
          />
        </div>
        <div className="description">
          <span>Description: </span>
          <input
            type="text"
            maxLength={999}
            value={apartmentInfo.description}
            onChange={(event) =>
              setApartmentInfo({
                ...apartmentInfo,
                description: event.target.value,
              })
            }
          />
        </div>
        <div className="rooms">
          <span>Rooms: </span>
          <input
            type="number"
            value={apartmentInfo.rooms}
            min={1}
            onChange={(event) =>
              setApartmentInfo({ ...apartmentInfo, rooms: event.target.value })
            }
          />
        </div>

        <div className="rentPrice">
          <span>Rent Price</span>
          <input
            type="number"
            min={1}
            value={apartmentInfo.price}
            onChange={(event) =>
              setApartmentInfo({ ...apartmentInfo, price: event.target.value })
            }
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="submit"
          disabled={disabledButton}
          onClick={sendForm}
        />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewApartment: (apartment) => dispatch(fetchNewApartment(apartment)),
  };
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(NewRent);
