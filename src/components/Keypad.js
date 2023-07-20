import React from "react";

const Keypad = () => {
  const handleInputChange = (e) => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input type="password" onChange={handleInputChange} />
    </div>
  );
};

export default Keypad;
