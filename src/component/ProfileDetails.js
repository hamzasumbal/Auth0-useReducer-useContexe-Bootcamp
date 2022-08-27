import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const ProfileDetails = () => {
  const {
    state: User,
    actions: { updateUniversity },
  } = useContext(UserContext);

  const [input, setInput] = useState({
    university: User.university,
    email: User.email,
  });

  return (
    <>
      <h1>{User.name}</h1>
      <br />
      <img src={User.picture} />
      <br />
      <input
        value={input.university}
        onChange={(event) => {
          setInput({ ...input, university: event.target.value });
        }}
      />
      <br />
      <input
        value={input.email}
        onChange={(event) => {
          setInput({ ...input, email: event.target.value });
        }}
        disabled
      />
      <br />
      <button onClick={() => updateUniversity(input.university)}>Save</button>
    </>
  );
};

export default ProfileDetails;
