import React from "react";

const NameCard = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="justify-items-start">
          <div className="text">Name</div>
          <div className="text">Shreya Adhikary</div>
        </div>
        <div className="justify-items-end">
          <div className="text">Employee ID</div>
          <div className="text">2470328</div>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
