import { connectDb } from "@/database/db";
import { Todo } from "@/models/TodoModel";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  try {
    connectDb();
    await Todo.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, err: error.message });
  }
}
