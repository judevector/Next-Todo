"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Add = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Todo and Description are required!");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a todo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Todo Title"
        className=" border border-pink-500 px-8 py-2 rounded-md"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Todo Description"
        className=" border border-pink-500 px-8 py-2 rounded-md"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 font-bold text-white py-3 px-6 w-fit rounded-md"
      >
        Add Todo
      </button>
    </form>
  );
};

export default Add;
