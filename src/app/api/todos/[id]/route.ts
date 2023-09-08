import connectDB from "@/libs/connectdb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

connectDB();

// Update a todo object
export const PUT = async (req: any, { params }: any) => {
  const { id } = params;
  const { title: title, description: description } = await req.json();

  const updateTodo = await Todo.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );

  if (!updateTodo) {
    return NextResponse.json(
      { message: `Todo  with ID: ${id} does not exist` },
      { status: 404 }
    );
  }
  return NextResponse.json({ message: updateTodo }, { status: 200 });
};

// Get a todo by id
export const GET = async (req, { params }) => {
  const { id } = params;

  const getTodoById = await Todo.findOne({ _id: id });
  return NextResponse.json({ message: getTodoById }, { status: 200 });
};
