import { connectDb } from "@/database/db";
import { Todo } from "@/models/TodoModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    connectDb();
    const todo = await Todo.find({});
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json({ success: false, err: error.message });
  }
}
