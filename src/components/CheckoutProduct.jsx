import "../styles/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, image, title, rating, price }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove item(object) from the cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    })
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__image">
        <img src={image} />
      </div>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
