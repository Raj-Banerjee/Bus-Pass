import React from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';

const banner = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-4"><DehazeIcon/></div>
        <div className="col-span-4">TCS Bus Pass</div>
        <div className="col-span-4">Login</div>
      </div>
    </div>
  )
}

export default banner