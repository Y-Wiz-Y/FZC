import React, { useRef } from 'react';

function Delivery({ country ,callDelivery}) {
  return (
    <li>
      <div onClick={()=>callDelivery(country)} className="description-drop-block__cintent">{country}</div>
    </li>
  );
}

export default Delivery;
