import { createContext, useContext, useEffect, useState } from "react";
import { useProduct } from "./ProductContext";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const products = useProduct();

  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("latest");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };
  const filteredBySearchValue = (array) => {
    return array.filter((product) => product.title.includes(searchValue));
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };
  const sortedProducts = (array) => {
    return [...array].sort((a, b) => {
      if (sort === "latest") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else if (sort === "earliest") {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }
    });
  };

  const categoryHandler = (e) => {
    setCategoryFilter(e.target.value);
  };
  const filteredByCategory = (array) => {
    if (!categoryFilter) return array;
    return array.filter((product) => product.category === categoryFilter);
  };

  useEffect(() => {
    let newProducts = products;
    newProducts = filteredBySearchValue(newProducts);
    newProducts = filteredByCategory(newProducts);
    newProducts = sortedProducts(newProducts);
    setFilteredProducts(newProducts);
  }, [products, searchValue, categoryFilter, sort]);

  return (
    <FilterContext.Provider
      value={{
        filteredProducts,
        searchValue,
        searchHandler,
        sort,
        sortHandler,
        categoryFilter,
        categoryHandler,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined)
    throw new Error("FilterContext was used outside of FilterProvider");
  return context;
}
