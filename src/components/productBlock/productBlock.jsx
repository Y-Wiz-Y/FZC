import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setTest } from '../../redux/slices/productBlock';
import Product from './Product';
import Skeleton from '../skeleton';

function ProductBlock() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dataShow = useSelector((state) => state.product.showItems);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setItems(dataShow);
    setIsLoading(false);
    
  }, [dataShow]);
  // items.map((obj)=>(dispatch(setProductParam(obj))))




  return (
    <div>
      <div className="tranding-products">
        <div className="conteiner__neutral">
          <div className="tranding-products__row">
            <div className="tranding-products__block">
              <div className="tranding-products__text">
                <div className="pre-title">TRANDING</div>
                <h1>Tranding Products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="tranding-product_action">
                <button className="neutral_button" type="">
                  View all
                </button>
              </div>
            </div>
            <div className="tranding-products__sentences">
              <ul>
                {isLoading
                  ? [...new Array(4)].map(() => <Skeleton />)
                  : items.map((obj) => <Product key={obj.id} {...obj} />)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBlock;
