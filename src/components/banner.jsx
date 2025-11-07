import React, { useState } from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DoubleArrow from '../images/double-arrow.png';

const banner = () => {

  const [isFullscreen, setIsFullscreen] = useState(false);

  // const handleFullscreenToggle = () => {
  //   if (!document.fullscreenElement) {
  //     document.documentElement.requestFullscreen();
  //     setIsFullscreen(true);
  //   } else if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //     setIsFullscreen(false);
  //   }
  // };
    const handleFullscreenToggle = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      // Simulate fullscreen on iPhone
      setIsFullscreen(!isFullscreen);
      document.body.style.overflow = !isFullscreen ? 'hidden' : 'auto';
    } else {
      // Normal Fullscreen API
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };


  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 bg-[#412b97] text-white">
        <div className="flex items-center space-x-3"
        onClick={handleFullscreenToggle}>
          <DehazeIcon />
          <span className="text-lg pl-6">Digital Bus Pass</span>
        </div>
        <NotificationsNoneIcon />
      </div>
      
      <div className='px-3 pt-3 rounded'>
        <div className="bg-gradient-to-r from-[#1a55ee] to-[#6135ca] text-white flex flex-col items-center justify-center text-center p-4 space-y-3 rounded-lg">
          <div>Thakurpukur</div>

          <div className="w-[30%] flex justify-center">
            <img src={DoubleArrow} alt="Arrow" className="w-[30%] h-auto" />
          </div>

          <div>Gitanjali Park</div>

          <div className="flex justify-between w-full max-w-md">
            <div>Office In - 09:30</div>
            <div>Office Out - 18:30</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default banner