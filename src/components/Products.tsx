import { productsMock } from "../mocks/products";
import { useCartStore } from "../stores/cart.store";

export const Products = () => {
  const products = productsMock;
  const addItemToCart = useCartStore((state) => state.addToCart);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        gap: "32px",
        flexDirection: "column",
      }}
    >
      <h3>PRODUCTS</h3>
      {products.map((product) => (
        <div key={product.id}>
          <h4 style={{ margin: 0 }}>{product.title}</h4>
          <span style={{ marginRight: "16px" }}>
            R$ {product.price.toFixed(2)}
          </span>
          <button onClick={() => addItemToCart(product)}>add to cart</button>
        </div>
      ))}
    </div>
  );
};
