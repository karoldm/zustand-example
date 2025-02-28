import "./App.css";
import { Cart } from "./components/Cart";
import { Products } from "./components/Products";

function App() {
  return (
    <div style={{ display: "flex", gap: "64px", width: "100%" }}>
      <Products />
      <Cart />
    </div>
  );
}

export default App;
