import { useProduct } from "../context/ProductContext";
import DarkModeToggle from "../ui/DarkModeToggle";

function InventoryHeader() {
  const products = useProduct();

  return (
    <div className="bg-secondary-700 h-12 flex items-center sticky top-0 mb-6">
      <div className="container lg:max-w-screen-xl flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <h1 className="text-secondary-300 font-bold text-lg md:text-xl">
            Inventory App using tailwind & React.js
          </h1>
          <span className="product-number">{products.length}</span>
        </div>
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default InventoryHeader;
