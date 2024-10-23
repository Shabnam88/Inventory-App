import { createContext, useContext, useReducer } from "react";

const initial = [];
const CategoryContext = createContext();
const DispatchContext = createContext();

function reducer(categories, { type, payload }) {
  switch (type) {
    case "addCategory": {
      localStorage.setItem(
        "categories",
        JSON.stringify([...categories, payload])
      );
      return [...categories, payload];
    }

    default:
      throw new Error("Unknown Action " + type);
  }
}

function CategoryProviders({ children }) {
  const storedCategories = localStorage.getItem("categories");
  const [categories, dispatch] = useReducer(
    reducer,
    storedCategories ? JSON.parse(storedCategories) : initial
  );

  return (
    <CategoryContext.Provider value={categories}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </CategoryContext.Provider>
  );
}

export default CategoryProviders;

export function useCategory() {
  const context = useContext(CategoryContext);
  if (context === undefined)
    throw new Error("CategoryContext was used outside of CategoryProvider");
  return context;
}

export function useDispatch() {
  const context = useContext(DispatchContext);
  if (context === undefined)
    throw new Error("DispatchContext was used outside of DispatchProvider");
  return context;
}
