import React from "react";

import Card_Top from "../Components/Card_Top/Card";
import Card_Right from "../Components/Card_Right/Card";
import Card_Left from "../Components/Card_Left/Card";

import "./Style.css";

const Container = () => {
  return (
    <div className="Container">
      <div className="Container_Card-top">
        <Card_Top />
      </div>
      <div className="Container-divider">
        <div className="Container_Card-right">
          <Card_Right />
        </div>
        <div className="Container_Card-left">
          <Card_Left />
        </div>
      </div>
    </div>
  );
};

export default Container;
