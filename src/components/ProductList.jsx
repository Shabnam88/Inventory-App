import { useFilter } from "../context/FilterContext";
import { useDispatch } from "../context/ProductContext";

function ProductList() {
  const { filteredProducts } = useFilter();
  const products = filteredProducts;

  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl text-secondary-400 font-bold mb-4 border-b-secondary-500 border-b">
        Product List
      </h2>
      <div className="overflow-x-auto">
        {products &&
          products.map((product) => {
            const { id, title, category, quantity, createdAt } = product;
            const localDate = new Date(createdAt).toLocaleDateString("fa-IR");

            return (
              <div
                key={id}
                className="flex items-center justify-between mb-2 w-full min-w-[400px]"
              >
                <span className="text-secondary-400">{title}</span>
                <div className="flex items-center gap-x-3">
                  <span className="text-secondary-400">{localDate}</span>
                  <span className="block px-3 py-0.5 text-secondary-400 border border-secondary-400 text-sm rounded-2xl">
                    {category}
                  </span>
                  <span className="product-number">{quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: "deleteProduct", payload: id })
                    }
                    className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400 delete-product"
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductList;
