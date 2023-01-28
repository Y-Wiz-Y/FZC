import React from 'react';
import infoImg from '../scss/source/layout/Image_build.svg';
import relImg from '../scss/source/layout/Relume.svg';

function InfoBlock() {
  return (
    <div>
      <div className="layout">
        <div className="conteiner__neutral">
          <div className="layout__row">
            <img src={infoImg} alt="" />
            <div className="layout__text">
              <h1>Long heading is what you see here in this feature section</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat.
              </p>
              <ul>
                <li>
                  <img src={relImg} alt="" />
                  <div className="layout__content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </li>
                <li>
                  <img src={relImg} alt="" />
                  <div className="layout__content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </li>
                <li>
                  <img src={relImg} alt="" />
                  <div className="layout__content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBlock;
