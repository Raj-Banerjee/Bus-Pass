import React from "react";
import "./styles.css";

const NameCard = () => {
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), 1);
  const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const ordinal = (n) => {
    const j = n % 10, k = n % 100;
    if (j === 1 && k !== 11) return 'st';
    if (j === 2 && k !== 12) return 'nd';
    if (j === 3 && k !== 13) return 'rd';
    return 'th';
  };
  const formatDate = (d) => `${d.getDate()}${ordinal(d.getDate())} ${monthNames[d.getMonth()]}, ${d.getFullYear()}`;

  const startDate = formatDate(start);
  const endDate = formatDate(end);

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
    justifyItems: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    Confirmed Bus Pass
  </div>
</div>


        <div className="p-4 content-fonts">
          <div className="flex justify-between pb-5">
            <div className="justify-items-start">
              <div className="text">Name</div>
              <div className="text">SHREYA ADHIKARY</div>
            </div>
            <div className="justify-items-end">
              <div className="text">Employee ID</div>
              <div className="text">2470328</div>
            </div>
          </div>
          <div className="flex justify-between pb-5">
            <div className="justify-items-start">
              <div className="text">Bus Stop Name</div>
              <div className="text">Manton Super Market</div>
            </div>
            <div className="justify-items-end">
              <div className="text">Route Type</div>
              <div className="text">Both</div>
            </div>
          </div>
          <div className="flex justify-between pb-5">
            <div className="justify-items-start">
              <div className="text">Start Date</div>
              <div className="text">{startDate}</div>
            </div>
            <div className="justify-items-end">
              <div className="text">End Date</div>
              <div className="text">{endDate}</div>
            </div>
          </div>

        <div className="justify-items-center text-center">

          <div>
            Route: Thakurpukur to Gitanjali Park and 
          </div>
          <div>Return Via- Taratala</div>
        </div>
        </div>

      </div>
        <div className="p-1 mx-3 text-center content-fonts" style={{backgroundColor: '#412B97' , color: 'white', borderRadius: '1px'}}>
            View QR
        </div>
    </>
  );
};

export default NameCard;
