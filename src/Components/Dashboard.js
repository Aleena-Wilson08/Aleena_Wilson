import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [addresses, setAddresses] = useState([]);
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    fetchAddresses();
  }, []);

  function fetchAddresses() {
    axios.get("http://localhost:8080/api/address").then((res) => {
      setAddresses(res.data);
    });
  }

  function addAddressBookInfo() {
    const addressbookData = { name: name, email: email,address: address,phoneNumber:phoneNumber };
    axios.post("http://localhost:8080/api/address", addressbookData).then(() => {
      fetchAddresses();
      setName("");
      setEmail("");
      setAddress("");
      setPhoneNumber("");
    });
  }

  return (
    <div>
      <div>
        <h1>Address Book</h1>
        <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          
            <button onClick={addAddressBookInfo}>Add Info</button>
    
        </div>
      <h1>Address Details</h1>
      <div>
        {addresses.map((address) => (
          <div key={address.id}>
        <p>ID: {address.id}</p>
        <h2>Name:{address.name}</h2>
        <p>Phone No: {address.phoneno}</p>
        <p>Email: {address.email}</p>
        <p>Address: {address.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;