import { useState } from "react";
import Input from "../ui/Input";
import SelectOptions from "../ui/SelectOptions";
import { useCategory } from "../context/CategoryContext";
import { useDispatch } from "../context/ProductContext";

function AddNewProduct() {
  const categories = useCategory();
  const dispatch = useDispatch();

  const [productTitle, setProductTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      !productTitle ||
      !quantity ||
      !category ||
      category === "select a category"
    )
      return;

    const newProduct = {
      id: Date.now(),
      title: productTitle,
      quantity,
      category,
      createdAt: new Date().toISOString(),
    };

    dispatch({ type: "addProduct", payload: newProduct });
    setProductTitle("");
    setQuantity(0);
    setCategory("");
  };

  return (
    <div className="mb-10">
      <h2 className="form-container">Add New Product</h2>
      <form
        className="bg-secondary-700 p-4 rounded-xl flex flex-col gap-y-4"
        onSubmit={AddProductHandler}
      >
        <Input
          id="product-title"
          label="title"
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
          inputClass="textField md:w-auto"
          labelClass="text-secondary-400 mb-1"
        />
        <Input
          type="number"
          min={0}
          id="product-quantity"
          label="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          inputClass="textField md:w-auto"
          labelClass="text-secondary-400 mb-1"
        />
        <SelectOptions
          id="product-category"
          label="category"
          index="select a category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={categories}
          labelClass="text-secondary-400 mb-1"
          selectClass="textField"
        />
        <button type="submit" className="w-full btn btn--primary">
          Add New Product
        </button>
      </form>
    </div>
  );
}

export default AddNewProduct;
