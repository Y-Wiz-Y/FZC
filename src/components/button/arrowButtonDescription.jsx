import React from 'react';
import { useState } from 'react';

function ArrowButtonDescription({setArrowPopUp,arrowPopUp}) {
  
  
  return (
    <>
      <div className="staging_button">
        <button
          id="popUp-btn"
          onClick={() => setArrowPopUp(!arrowPopUp)}
          className="orange-button_arrow-down "></button>
      </div>
    </>
  );
}

export default ArrowButtonDescription;
