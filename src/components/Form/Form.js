import React, { useState } from "react";
import "./Form.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Form() {
  const location = useLocation();
  let navigate = useNavigate();
  if (location.state === undefined) {
    navigate("/");
  }
  const [message, setMessage] = useState("");
  const goback = () => {
    navigate("/");
  };
  const bookShow = () => {
    const userDetails = {
      show: document.querySelector("#showinput").value,
      name: document.querySelector("#nameinput").value,
      hall: document.querySelector("#hallinput").value,
    };
    window.localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setMessage("Successfully Booked");
  };
  return (
    <div className="formsection">
      <div id="form">
        <form>
          <div className="moviename">
            <input
              id="showinput"
              type="text"
              readOnly={true}
              value={location.state !== undefined ? location.state.name : " "}
            />
          </div>
          <input id="nameinput" type="text" placeholder="Your Name" />
          <div className="hallbook">
            <div>Select the cinema hall : </div>
            <select name="" id="hallinput">
              <option value="hall1">Hall 1</option>
              <option value="hall2">Hall 2</option>
              <option value="hall3">Hall 3</option>
              <option value="hall4">Hall 4</option>
              <option value="hall5">Hall 5</option>
            </select>
          </div>
          <div id="message">{message}</div>
        </form>
        <div id="button">
          <button type="reset" onClick={() => bookShow()}>
            Book
          </button>
          <button onClick={() => goback()}>Go Back</button>
        </div>
      </div>
    </div>
  );
}
