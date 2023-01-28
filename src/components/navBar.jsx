import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../scss/source/LogoPNG1.svg';
function NavBar() {
  const countProducts = useSelector(state => state.basket.count)
  return (
    <div>
      <div className="nav">
        <div className="conteiner flex clear_back">
          <div className="conteiner__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="navigate">
            <div className="navigate__list">
              <ul>
                <li>
                    <Link to="/">Home</Link> 
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="cart">
              <div className="cart__block">Cart</div>
              <div className="cart__count">{countProducts}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
