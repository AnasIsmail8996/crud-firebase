import React from "react";

const ButtonCom = ({ onclick, title }) => {
  return <button onClick={onclick}>{title}</button>;
};

export default ButtonCom;
