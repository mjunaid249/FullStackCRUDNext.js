import { connectDb } from "@/database/db";
import { Todo } from "@/models/TodoModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, isCompleted } = await request.json();
  try {
    connectDb();
    const todo = await Todo.create({ title, isCompleted });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json({ success: false, err: error.message });
  }
}
