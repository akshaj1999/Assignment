import React, { useState } from "react";
import Popup from "reactjs-popup";
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import OtpInput from "react-otp-input";

export default function App() {
  const [phone, setPhone] = useState("");
  const [otp, setotp] = useState("");
  const [op, setop] = useState(false);
  function handleClick(event) {
    console.log("rahul");

    alert("Sending request to backend");

    setop(true);
  }
  function handleOtp(otp) {
    setotp(otp);
  }
  function handleOnChange(value) {
    // console.log(value);

    setPhone(value);
  }
  function onclose() {
    setop(false);
  }
  function verifyOtp() {
    // event.preventDefault();
    alert("Sending request to backend for otp verify");
    if (otp === "1234") {
      alert("success");
      setop(false);
    } else alert("Failure");
  }
  return (
    <div className="App">
      <div>
        <h1>Taking Input of number</h1>

        <ReactPhoneInput 
          inputExtraProps={{
            name: "phone",
            required: true,
            autoFocus: true
          }}
          defaultCountry={"sg"}
          value={phone}
          onChange={handleOnChange}
        />

        <button onClick={handleClick} className="button">
          {" "}
          send otp
        </button>
        <Popup open={op} onClose={onclose}>
          <div>
            <OtpInput
              onChange={handleOtp}
              value={otp}
              numInputs={4}
              separator={<span>-</span>}
            />
            <button onClick={verifyOtp} className="button" type="submit">
              Verify Otp
            </button>
          </div>
        </Popup>
      </div>
    </div>
  );
}
