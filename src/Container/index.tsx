import React from "react";

import CardTop from "../Components/Card_Top/Card";
import CardRight from "../Components/Card_Right/Card";
import CardLeft from "../Components/Card_Left/Card";

import "./Style.css";

const Container = () => {
  return (
    <div className="Container">
      <div className="Container_Card-top">
        <CardTop />
      </div>
      <div className="Container-divider">
        <div className="Container_Card-right">
          <CardRight />
        </div>
        <div className="Container_Card-left">
          <CardLeft />
        </div>
      </div>
    </div>
  );
};

export default Container;
