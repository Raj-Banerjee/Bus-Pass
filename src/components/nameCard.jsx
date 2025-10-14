import React from "react";
import "./styles.css";

const NameCard = () => {
  return (
    <>
      <div className="m-4  border-gray-300 rounded-lg shadow-md space-y-4">
        {/* <div style={{backgroundColor: '#4caf50'}} className="">
          <div className="" style={{backgroundColor: 'white' , borderRadius: '50%', height: '40%'}}>Confirmed Bus Pass</div>
        </div> */}

      <div style={{backgroundColor: '#12be12'}}>
  <div style={{
    backgroundColor: 'white', 
    borderTopLeftRadius: '30vw',
    borderBottom: '1px dashed #d0d3d6',
    height: '50px',
    width: '100%',
  }}>
    Confirmed Bus Pass
  </div>
</div>


        <div className="p-4">
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
          <div className="flex justify-between">
            <div className="justify-items-start">
              <div className="text">Bus Stop Name</div>
              <div className="text">Manton Super Market</div>
            </div>
            <div className="justify-items-end">
              <div className="text">Route Type</div>
              <div className="text">Both</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="justify-items-start">
              <div className="text">Start Date</div>
              <div className="text">4th Oct, 2025</div>
            </div>
            <div className="justify-items-end">
              <div className="text">End Date</div>
              <div className="text">30th Oct, 2025</div>
            </div>
          </div>

          <div>
            {" "}
            Route: Thakurpukur to Gitanjali Park, And Return Via- Taratala
          </div>
        </div>
      </div>
    </>
  );
};

export default NameCard;
