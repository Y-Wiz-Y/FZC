import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

function Product({title,imageUrl,price,id}) {
// const [{title,imageUrl,price}] = useSelector(state => state.product.items)

  return (
    <div>
      <li>
        <div className="tranding__block">
          <Link to={`product/${id}`}><img src={imageUrl} alt="" width="304" height="304" /></Link>
          <h2>{title}</h2>
          <p>Variant</p>
          <div className="tranding__price">$ {price}</div>
        </div>
      </li>
    </div>
  );
}

export default Product;
