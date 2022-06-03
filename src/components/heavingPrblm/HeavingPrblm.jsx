import React, { useState } from "react";
import { FAQModel } from "../FAQModel/FAQModel";
import "./HeavingPrblm.css";
 {/* This app is created by Mohit Agarwal  :: -> :: eMail : mohit724agarwal@gmail.com */}
export const HeavingPrblm = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="heaving-prblm-div">
      <p
        className="heaving-prblm-text"
        onClick={() => {
          setShowModel(true);
        }}
      >
        Having Problem ?
      </p>
      {showModel && (
        <FAQModel setShowModel={setShowModel} showModel={showModel} />
      )}
    </div>
  );
};
