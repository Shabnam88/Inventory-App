import AddNewCategory from "./AddNewCategory";
import AddNewProduct from "./AddNewProduct";
import Filters from "./Filters";
import ProductList from "./ProductList";

function InventoryApp() {
  return (
    <div className="container p-8 flex flex-col gap-y-10 md:p-4 md:flex-row lg:max-w-screen-xl md:gap-x-12 text-secondary-300">
      <section className="flex-1">
        <AddNewCategory />
        <AddNewProduct />
      </section>
      <section className="flex-1">
        <Filters />
        <ProductList />
      </section>
    </div>
  );
}

export default InventoryApp;
