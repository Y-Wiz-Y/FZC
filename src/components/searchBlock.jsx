import React from 'react';

function SearchBlock() {
  return (
    <div>
      <div className="cta">
        <div className="conteiner__neutral flex_center">
          <div className="cta__row">
            <div className="cta__text">
              <h1>Medium length heading goes here</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique.
              </p>
              <div className="cta_action">
                <form action="" className="form">
                  <label htmlFor="form__label">
                    <input type="text" className="form__input" placeholder="Enter your email" />
                    <button type="" className="neutral_button">
                      Sign Up
                    </button>
                  </label>
                </form>
                <div className="description">
                  By clicking Sign Up you're confirming that you agree with our Terms and
                  Conditions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBlock;
