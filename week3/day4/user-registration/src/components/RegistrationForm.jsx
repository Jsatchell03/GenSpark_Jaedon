import React, { useState } from "react";

export default function RegistrationForm({ userData, setUserData }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (
      firstName == "" ||
      lastName == "" ||
      email == "" ||
      address == "" ||
      dob == ""
    ) {
      alert("Please fill all fields");
    } else {
      setUserData([
        ...userData,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          address: address,
          dob: dob,
        },
      ]);
      setFirstName("");
      setLastName("");
      setEmail("");
      setAddress("");
      setDob("");
    }
  }
  const textInputStyle =
    "border border-default-medium rounded focus:ring-brand focus:border-brand block w-full px-3 py-2 shadow-xs";

  return (
    <div className=" bg-gray-200 w-128 rounded shadow-md mx-8 p-8">
      <h1 className="text-center text-lg mb-4">
        Please Enter Your Information Below
      </h1>
      <form>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          className={textInputStyle}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          className={textInputStyle}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          className={textInputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="address">Current Street Address</label>
        <br />
        <input
          type="text"
          name="address"
          id="address"
          className={textInputStyle}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <label htmlFor="dob">Date Of Birth</label>
        <br />
        <input
          type="date"
          name="dob"
          id="dob"
          className={textInputStyle}
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br />
        <button
          onClick={(e) => handleSubmit(e)}
          className="border border-transparent ring-blue-600 w-full py-2 rounded bg-blue-400 text-white focus:ring-2 hover:bg-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
