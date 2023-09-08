import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { Todo } from "../../types";

const TodoList = async () => {
  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/todos", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Could not fetch Todos from server");
      }
      return res.json();
    } catch (error) {
      console.log("Error fetching Todos", error);
    }
  };

  const { todos } = await fetchTodos();

  return (
    <>
      <div className=" p-4 border border-pink-300 my-3 flex justify-between gap-5 rounded-md">
        <div>
          <h2 className="font-bold text-2xl">{}</h2>
          <div>Todo Description</div>
        </div>
        <div className="flex gap-2 items-start">
          <RemoveBtn />
          <Link href={"/update"}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TodoList;
