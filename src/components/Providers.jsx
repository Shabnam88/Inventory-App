import CategoryProviders from "../context/CategoryContext";
import DarkModeProvider from "../context/DarkModeContext";
import FilterProvider from "../context/FilterContext";
import ProductProviders from "../context/ProductContext";

function Providers({ children }) {
  return (
    <DarkModeProvider>
      <CategoryProviders>
        <ProductProviders>
          <FilterProvider>{children}</FilterProvider>
        </ProductProviders>
      </CategoryProviders>
    </DarkModeProvider>
  );
}

export default Providers;
