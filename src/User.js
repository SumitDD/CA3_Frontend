import { useState } from "react";
import facade from "./apiFacade";

function User() {
  let obj = { pHobby: "" };

  const [hobby, setHobby] = useState(obj);

  const onChange = (evt) => {
    const value = evt.target.value;
    hobby.pHobby = value;
    setHobby({ ...hobby });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    facade.addHobby(hobby);
    setHobby({ ...obj });
  };

  return (
    <div>
      <p>Du er logget ind som user og har adgang til denne side</p>

      <form>
        <h4>Her kan du tilføje en hobby</h4>
        <input placeholder="Tilføj hobby" id="hobby" onChange={onChange} />
        <button onClick={handleSubmit}>Tilføj</button>
      </form>
    </div>
  );
}

export default User;
