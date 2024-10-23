import { createContext, useContext, useReducer } from "react";

const initial = [];
const ProductContext = createContext();
const DispatchContext = createContext();

function reducer(products, { type, payload }) {
  let newProducts = [];

  switch (type) {
    case "addProduct": {
      newProducts = [...products, payload];
      localStorage.setItem("products", JSON.stringify(newProducts));
      return newProducts;
    }

    case "deleteProduct": {
      newProducts = products.filter((product) => product.id !== payload);
      localStorage.setItem("products", JSON.stringify(newProducts));
      return newProducts;
    }

    default:
      throw new Error("Unknown Action " + type);
  }
}

function ProductProviders({ children }) {
  const storedProducts = localStorage.getItem("products");
  const [products, dispatch] = useReducer(
    reducer,
    storedProducts ? JSON.parse(storedProducts) : initial
  );

  return (
    <ProductContext.Provider value={products}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </ProductContext.Provider>
  );
}

export default ProductProviders;

export function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error("ProductContext was used outside of ProductProvider");
  return context;
}

export function useDispatch() {
  const context = useContext(DispatchContext);
  if (context === undefined)
    throw new Error("DispatchContext was used outside of DispatchProvider");
  return context;
}
