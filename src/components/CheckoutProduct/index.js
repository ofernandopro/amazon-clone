import React from 'react';
import './styles.css';
import { useStateValue } from "../../StateProvider.js";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(id, title, image, price, rating);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>

        <p className="checkoutProduct_price">
          <small>R$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct_rating">
          {
            Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))
          }
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct;
