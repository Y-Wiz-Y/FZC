import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../components/button/button';
import Delivery from '../components/productBlock/delivery';
import Description from '../components/productBlock/description';
import SearchBlock from '../components/searchBlock';
import { setCard } from '../redux/slices/card';
import { fetchCurrentPageById } from '../redux/slices/productBlock';

function ProductBuy() {
  const [item, setItem] = useState([]);
  const refDev = useRef();
  const refQuan = useRef();
  const [waitAnsw, setWaitAnsw] = useState(false);
  const [deliveryUpdate, setDeliveryUpdate] = useState('Choose u delivery ');
  const [price, setPrice] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);
  const collector = (delivery, title, type, price, imageUrl, quantity) => {
    let obj = {
      delivery: delivery,
      title: title,
      type: type,
      price: price,
      imageUrl: imageUrl,
      quantity: quantity,
    };
    dispatch(setCard(obj));
  };
  const { productId } = useParams();
  const dispatch = useDispatch();
  const callUpdateData = (value) => {
    setPrice(value);
  };
  const callDelivery = (value) => {
    setDeliveryUpdate(value);
  };

  useEffect(() => {
    dispatch(fetchCurrentPageById(productId)).then((value) => {
      setItem(value.payload);
      setWaitAnsw(true);
    });
    window.scrollTo(0, 0);
  }, []);

  const popUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <>
      <div className=" conteiner__neutral">
        <div className="category">
          <p className="firP">{item.type}</p>
          <div className="category__symbol">{'>'}</div>
          <p className="secP">{item.title}</p>
        </div>
        <div className="product">
          <div className="product-content-images">
            <div className="img-list">
              <ul>
                <li>
                  <img src={item.imageUrl} alt="" />
                </li>
                <li>
                  <img src={item.imageUrl} alt="" />
                </li>
                <li>
                  <img src={item.imageUrl} alt="" />
                </li>
              </ul>
            </div>
            <div className="big-img">
              <img src={item.imageUrl} alt="bigImg" />
            </div>
          </div>
          <div className="product-content conteiner__description">
            <div className="product-order">
              <h3>{item.title}</h3>
              <h4>$ {waitAnsw && item.price[price]}</h4>
              <div className="rating">
                <div class="wrapper-stars">
                  <div class="stars">
                    <input
                      id="id_star__5"
                      type="radio"
                      class="star__input"
                      name="stars"
                      value="5"
                    />
                    <label for="id_star__5" class="star__label"></label>
                    <input
                      id="id_star__4"
                      type="radio"
                      class="star__input"
                      name="stars"
                      value="4"
                    />
                    <label for="id_star__4" class="star__label"></label>
                    <input
                      id="id_star__3"
                      type="radio"
                      class="star__input"
                      name="stars"
                      value="3"
                    />
                    <label for="id_star__3" class="star__label"></label>
                    <input
                      id="id_star__2"
                      type="radio"
                      class="star__input"
                      name="stars"
                      value="2"
                    />
                    <label for="id_star__2" class="star__label"></label>
                    <input
                      id="id_star__1"
                      type="radio"
                      class="star__input"
                      name="stars"
                      value="1"
                    />
                    <label for="id_star__1" class="star__label"></label>
                  </div>
                </div>

                <h5 className="mark">(0 stars) •</h5>
                <h5 className="reviews">10 reviews</h5>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo voluptas assumenda est
                repellendus ab atque fugiat quibusdam? Quam, voluptatibus reiciendis! Dignissimos
                iste molestiae atque minus nam sequi placeat eius officiis.
              </p>
            </div>
            <div className="product-content-input">
              <h5 className="variant">Delivery</h5>
              <form action="#" className="form-description">
                <label>
                  <input
                    onClick={() => popUp()}
                    ref={refDev}
                    value={deliveryUpdate}
                    type="text"
                    className="form__input "
                    id="delivery__input1"
                    // placeholder="Select"
                    onChange={(event) => this.setDeliveryUpdate(event)}
                  />
                  <button className="button_arrow-down"></button>
                  <div className="description-drop-block">
                    <ul>
                      {showPopUp &&
                        item.delivery.map((value) => (
                          <Delivery country={value} key={value} callDelivery={callDelivery} />
                        ))}
                    </ul>
                  </div>
                </label>
              </form>
            </div>
            <div className="product-content-category">
              <h5 className="variant">Type</h5>
              <ul>{waitAnsw && <Button callUpdateData={callUpdateData} style={item.style} />}</ul>
            </div>
            <div className="product-content-quantity">
              <div className="quantity-block">
                <h5 className="variant">Quantity</h5>
                <form action="" className="form-description">
                  <label>
                    <input type="text" ref={refQuan} className="form__counter " placeholder="0" />
                  </label>
                </form>
              </div>
            </div>
            <div className="product-content-options">
              <ul>
                <li>
                  <button
                    onClick={() =>
                      collector(
                        refDev.current.value,
                        item.title,
                        item.style[price],
                        item.price[price],
                        item.imageUrl,
                        refQuan.current.value,
                      )
                    }
                    className="button_buy beige"
                    type="">
                    Add To Cart
                  </button>
                </li>
                <li>
                  <button className="button_buy black" type="">
                    Buy Now
                  </button>
                </li>
              </ul>
              <p>Free shipping over $50</p>
            </div>
            <div className="product-descriptions">
              <ul>
                <Description />
                <Description />
                <Description />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SearchBlock />
    </>
  );
}

export default ProductBuy;
