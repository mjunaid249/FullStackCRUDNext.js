import { connectDb } from "@/database/db";
import { Todo } from "@/models/TodoModel";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const id = request.nextUrl.searchParams.get("id");
  try {
    connectDb();
    const todo = await Todo.findByIdAndUpdate(id, {
      $set: {
        isCompleted: true,
      },
    });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json({ success: false, err: error.message });
  }
}
