import { useCartStore } from "../stores/cart.store";

export const Cart = () => {
  const { items, removeFromCart, clearCart } = useCartStore();

  return (
    <div style={{ flex: 1 }}>
      <h2>Cart - {items.length} items</h2>
      <button onClick={clearCart}>clear cart</button>
      <ul>
        {items.map((item) => (
          <li style={{ display: "flex", gap: "32px" }}>
            <span>{item.title}</span>
            <button onClick={() => removeFromCart(item)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
