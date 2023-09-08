import React from "react";

const EditTodoForm = () => {
  return (
    <form action="" className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Todo Title"
        className=" border border-pink-500 px-8 py-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Todo Description"
        className=" border border-pink-500 px-8 py-2 rounded-md"
      />
      <button className=" bg-green-500 font-bold text-white py-3 px-6 w-fit rounded-md">
        Update Todo
      </button>
    </form>
  );
};

export default EditTodoForm;
