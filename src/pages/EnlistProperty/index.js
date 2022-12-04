import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "reactstrap";
import { useToasts } from "react-toast-notifications";
import ReactLoading from "react-loading";

import { getEnlistmentContract } from "../../state/enlistment/actions";

import "./EnlistProperty.css";

const EnlistProperty = () => {
  const [enlistment, setEnlistment] = useState({
    streetName: "",
    floorNr: null,
    apartmentNr: null,
    houseNr: null,
    postalCode: null,
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const handleFormChange = (e) => {
    setEnlistment({ ...enlistment, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async () => {
    try {
      const { streetName, apartmentNr, houseNr, floorNr, postalCode } =
        enlistment;

      if (!streetName || !floorNr || !postalCode || !apartmentNr || !houseNr) {
        return alert("All form fields are required");
      }
      const enlistmentContract = dispatch(getEnlistmentContract());
      console.log(enlistmentContract);
      const transactionHash = await enlistmentContract.addEnlistmet(
        streetName,
        floorNr,
        apartmentNr,
        houseNr,
        postalCode
      );

      setLoading(true);
      addToast(
        "Please wait while transaction is confirmed. Don't close this tab",
        { appearance: "info" }
      );
      console.log(transactionHash);
      await transactionHash.wait();
      setLoading(false);
      const listings = await enlistmentContract.getEnlistments()
      console.log(listings)
      addToast(
        `Your listing ${transactionHash.hash} has been received and will be reviewed!`,
        { appearance: "success" }
      );
     
      setEnlistment({
        streetName: "",
        floorNr: null,
        apartmentNr: null,
        houseNr: null,
        postalCode: null,
      });
    } catch (error) {
      addToast("An error occurred! Please try again", { appearance: "error" });
    }
  };

  return (
    <div className="enlist__property">
      {/* <Navbar /> */}
      <div className="brand">
        <img src="/Logo.svg" alt="Brand" />
      </div>
      <h3>Add Property</h3>

      <div className="add__form">
        {/* <div className="form__area">
          <label htmlFor="landlordEmail">Landlord Email</label>
          <Input
            type="email"
            name="landlordEmail"
            placeholder="Landlord Email"
            value={enlistment.landlordEmail}
            onChange={handleFormChange}
          />
        </div> */}
        <div className="form__area">
          <label htmlFor="streetName">Street Name</label>
          <Input
            type="text"
            name="streetName"
            placeholder="Street Name"
            value={enlistment.streetName}
            onChange={handleFormChange}
          />
        </div>
        <div className="form__area">
          <label htmlFor="floorNr">Floor Number</label>
          <Input
            type="number"
            name="floorNr"
            placeholder="Floor Number"
            value={enlistment.floorNr}
            onChange={handleFormChange}
          />
        </div>
        <div className="form__area">
          <label htmlFor="apartmentNr">Apartment Number</label>
          <Input
            type="number"
            name="apartmentNr"
            value={enlistment.apartmentNr}
            onChange={handleFormChange}
          />
        </div>
        <div className="form__area">
          <label htmlFor="houseNr">House Number</label>
          <Input
            type="text"
            name="houseNr"
            value={enlistment.houseNr}
            onChange={handleFormChange}
          />
        </div>
        <div className="form__area">
          <label htmlFor="postalCode">Postal Code</label>
          <Input
            type="number"
            name="postalCode"
            placeholder="Postal Code"
            value={enlistment.postalCode}
            onChange={handleFormChange}
          />
        </div>
        <div className="form__area">
          <button onClick={handleFormSubmit}>
            {loading ? (
              <ReactLoading color="#fff" width={30} height={30} type="spin" />
            ) : (
              "Enlist Property"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnlistProperty;
