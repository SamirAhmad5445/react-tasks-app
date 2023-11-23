import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { categories } from "../data";
import { getCreationDate } from "../utils";

const AddForm = ({ onAddTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("learning");

  function handleClose() {
    setIsOpen((is) => !is);
    setTitle("");
    setDescription("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (title && description) {
      const newTask = {
        id: new Date().getTime(),
        title: title,
        description: description,
        date: getCreationDate(),
        isDone: false,
        category: category,
      };

      onAddTask(newTask);
      handleClose();
    }
  }

  return (
    <div className="group" open={isOpen}>
      <button className="form-toggle" onClick={handleClose}>
        <FaPlus />
      </button>
      <div
        className="hidden group-open:block fixed inset-0 bg-neutral-900/50"
        onClick={handleClose}
      />
      <form id="addForm" className="form px-4 py-8" onSubmit={handleSubmit}>
        <h2 className="text-heading-2 text-center pb-4 border-b border-neutral-200">
          New Task Todo
        </h2>
        <div className="py-4">
          <label htmlFor="title" className="text-heading-1 block mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Add Task Name"
            className="bg-neutral-200 text-neutral-950 placeholder:text-neutral-800 px-2 py-2.5 rounded-md block w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="desc" className="text-heading-1 block mb-1">
            Description
          </label>
          <textarea
            name="desc"
            id="desc"
            placeholder="Add Description"
            className="bg-neutral-200 text-neutral-950 placeholder:text-neutral-800 px-2 py-2.5 rounded-md block w-full h-28 resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div>
            <p className="text-heading-1 mb-2">Category</p>
            <div className="bg-neutral-200/25 flex justify-between items-center px-8 py-3 rounded-md">
              {categories.map((cat) => (
                <label
                  className={`flex justify-center items-center gap-2 ${cat.colors.textColor}`}
                  key={cat.label}
                >
                  <div className={`checkbox ${cat.colors.checkbox}`}>
                    <input
                      type="radio"
                      name="category"
                      className={cat.colors.checkbox}
                      id={cat.label}
                      value={cat.label}
                      checked={category === cat.label}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                  <span>{cat.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 ">
          <button className="btn-neutral" type="button" onClick={handleClose}>
            Cancel
          </button>
          <button className="btn">Create</button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
