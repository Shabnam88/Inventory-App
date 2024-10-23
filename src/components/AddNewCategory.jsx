import { useState } from "react";
import Input from "../ui/Input";
import { useDispatch } from "../context/CategoryContext";

function AddNewCategory() {
  const dispatch = useDispatch();

  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [openAddCategory, setOpenAddCategory] = useState(false);

  const addCategoryHandler = (e) => {
    e.preventDefault();

    if (!categoryTitle || !categoryDescription) return;

    const newCategory = {
      id: Date.now(),
      title: categoryTitle,
      description: categoryDescription,
      createdAt: new Date().toISOString(),
    };

    dispatch({ type: "addCategory", payload: newCategory });
    setCategoryTitle("");
    setCategoryDescription("");
  };

  return (
    <div>
      {!openAddCategory ? (
        <button
          className="text-secondary-600 text-lg font-medium mb-4"
          onClick={() => setOpenAddCategory(true)}
        >
          Add New Category?
        </button>
      ) : (
        <div className="mb-8">
          <h2 className="form-container">Add New category</h2>
          <form
            className="bg-secondary-700 p-4 rounded-xl flex flex-col gap-y-4"
            onSubmit={addCategoryHandler}
          >
            <Input
              id="category-title"
              label="title"
              value={categoryTitle}
              onChange={(e) => setCategoryTitle(e.target.value)}
              inputClass="textField md:w-auto"
              labelClass="text-secondary-400 mb-1"
            />
            <div>
              <label
                htmlFor="category-description"
                className="text-secondary-400 mb-1"
              >
                description
              </label>
              <textarea
                className="textField"
                type="text"
                name="description"
                id="category-description"
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-between gap-x-4">
              <button
                className="flex-1 btn btn--secondary"
                onClick={() => setOpenAddCategory(false)}
              >
                cancel
              </button>
              <button type="submit" className="flex-1 btn btn--primary">
                Add Category
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddNewCategory;
