import React from 'react';
import footerImg from '../scss/source/footer/logo_footer.svg';
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="conteiner__neutral ">
          <div className="footer__nav">
            <img src={footerImg} alt="" />
            <div className="footer__row">
              <ul>
                <li>
                  <a href="" className="navigate"></a>Home
                </li>
                <li>
                  <a href="" className="navigate"></a>Products
                </li>
                <li>
                  <a href="" className="navigate"></a>About
                </li>
                <li>
                  <a href="" className="navigate"></a>Contact
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__certificate">
            <div className="footer__certificate-block">
              <p>2022 Relume. All right reserved.</p>
              <ul>
                <li>
                  <a href="" className="certificate">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="" className="certificate">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="" className="certificate">
                    Cookies Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
