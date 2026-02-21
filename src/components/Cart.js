import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-10 p-10 border-2 border-gray-200">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div>
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <h1 className="font-bold text-xl">Your cart is empty</h1>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};
export default Cart;
