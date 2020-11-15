import facade from "./apiFacade.js";
import React, { useState, useEffect } from "react";
function Name() {
  let obj = {
    name: "",
    address: "",
    phone_h: "",
  };

  const [dataFromServer, setDataFromServer] = useState(obj);

  const fetchPerson = () => {
    facade.fetchName().then((data) => setDataFromServer(data));
  };

  return (
    <div>
      <p>Name: {dataFromServer.name}</p>
      <p>Address: {dataFromServer.address}</p>
      <p>Phone: {dataFromServer.phone_h}</p>
      <button onClick={fetchPerson} className="btn btn-info">
        Fetch a new person
      </button>
    </div>
  );
}

export default Name;
