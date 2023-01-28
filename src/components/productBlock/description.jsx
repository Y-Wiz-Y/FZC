import React from 'react';
import { useState } from 'react';
import ArrowButtonDescription from '../button/arrowButtonDescription';

function Description() {
  const [arrowPopUp, setArrowPopUp] = useState(true);
  return (
    <>
      <li>
        <div className="product-descriptions-block">
          <div className="descriptions-block__line"></div>
          <h3>Details</h3>
          <ArrowButtonDescription setArrowPopUp={setArrowPopUp} arrowPopUp={arrowPopUp} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta rerum nemo omnis
            eum, delectus nam nesciunt molestiae! Aliquid veritatis error labore, at ipsa
            praesentium aspernatur laborum excepturi quisquam suscipit?
          </p>
          <p className={arrowPopUp === true ? 'p__n-active' : ''}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta rerum nemo omnis
            eum, delectus nam nesciunt molestiae! Aliquid veritatis error labore, at ipsa
            praesentium aspernatur laborum excepturi quisquam suscipit?
          </p>
        </div>
      </li>
    </>
  );
}

export default Description;
