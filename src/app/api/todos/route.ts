import connectDB from "@/libs/connectdb";
import Todo from "@/models/todo";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Connecting to the database
connectDB();

// Get all the todos
export const GET = async () => {
  try {
    const todos = await Todo.find();
    return NextResponse.json({ todos }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { "Error in fetching data": error },
      { status: 500 }
    );
  }
};

// Create a new Todo
export const POST = async (req: {
  json: () =>
    | PromiseLike<{ title: string; description: string }>
    | { title: string; description: string };
}) => {
  const { title, description } = await req.json();

  await Todo.create({ title, description });
  return NextResponse.json(
    { message: "Todo created successfully" },
    { status: 201 }
  );
};

// Delete a Todo
export const DELETE = async (req: {
  nextUrl: { searchParams: { get: (arg0: string) => any } };
}) => {
  const id = req.nextUrl.searchParams.get("id");

  const deleteTodo = await Todo.findByIdAndDelete(id);

  if (deleteTodo) {
    return NextResponse.json(
      { message: "Todo Deleted Successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: `Todo  with ID: ${id} does not exist` },
      { status: 404 }
    );
  }
};
