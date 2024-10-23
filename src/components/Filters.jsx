import Input from "../ui/Input";
import SelectOptions from "../ui/SelectOptions";
import { useCategory } from "../context/CategoryContext";
import { useFilter } from "../context/FilterContext";

const sortOptions = [
  { id: 1, title: "latest" },
  { id: 2, title: "earliest" },
];

function Filters() {
  const categories = useCategory();
  const {
    searchValue,
    searchHandler,
    sort,
    sortHandler,
    categoryFilter,
    categoryHandler,
  } = useFilter();

  return (
    <div className="mb-6">
      <h2 className="text-secondary-500 font-bold border-b border-b-secondary-500 mb-5 ">
        Filters
      </h2>

      <Input
        id="search-input"
        label="Search"
        container="flex justify-between items-center mb-6"
        labelClass="text-secondary-500 text-lg"
        inputClass="textField w-auto"
        value={searchValue}
        onChange={searchHandler}
      />
      <SelectOptions
        id="sort-products"
        label="Sort"
        index="Sort by"
        value={sort}
        onChange={sortHandler}
        container="flex justify-between items-center mb-6"
        labelClass="text-secondary-500 text-lg"
        selectClass="textField w-auto"
        options={sortOptions}
      />
      <SelectOptions
        id="category"
        label="Category"
        index="All"
        value={categoryFilter}
        onChange={categoryHandler}
        container="flex justify-between items-center mb-6"
        labelClass="text-secondary-500 text-lg"
        selectClass="textField w-auto"
        options={categories}
      />
    </div>
  );
}

export default Filters;
