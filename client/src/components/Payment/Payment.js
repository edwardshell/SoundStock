import React from "react";
import "./payment.css";

export const Payment = () => (
  <div className="creditCardForm">
    <div className="heading">
      <h1>Confirm Purchase</h1>
    </div>
    <div className="payment">
      <form>
        <div className="form-group owner">
          <label for="owner">Owner</label>
          <input type="text" className="form-control" id="owner" />
        </div>
        <div className="form-group CVV">
          <label for="cvv">CVV</label>
          <input type="text" className="form-control" id="cvv" />
        </div>
        <div className="form-group" id="card-number-field">
          <label for="cardNumber">Card Number</label>
          <input type="text" className="form-control" id="cardNumber" />
        </div>
        <div className="form-group" id="expiration-date">
          <label>Expiration Date</label>
          <select>
            <option value="01">January</option>
            <option value="02">February </option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select>
            <option value="18"> 2018</option>
            <option value="19"> 2019</option>
            <option value="20"> 2020</option>
            <option value="21"> 2021</option>
            <option value="22"> 2022</option>
            <option value="23"> 2023</option>
          </select>
        </div>
      </form>
    </div>
  </div>
);
