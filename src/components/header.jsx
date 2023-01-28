import React from 'react';
import headerImg from '../scss/source/header-img.svg';
function Header() {
  
  return (
    <div>
      <div className="header">
        <div className="conteiner">
          <div className="header__row">
            <div className="header__text">
              <h1 className="header__title">Medium length hero headline goes here</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat.
              </p>
              <div className="header_action">
                <button className="yellow_botton" type="">
                  Start Looking
                </button>
              </div>
            </div>
            <div className="header__img">
              <img src={headerImg} alt="Grow your audience" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
