import React, { useState } from "react";

export default function ChangeProfile(props) {
  const [newUsername, setNewUsername] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.setUsername(newUsername);
        }}
      >
        Change User Name
      </button>
    </div>
  );
}
