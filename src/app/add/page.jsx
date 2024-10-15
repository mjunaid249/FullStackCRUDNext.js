"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const addTodo = async () => {
    const res = await axios.post("http://localhost:3000/api/todo/add", {
      title: title,
    });
    console.log(res.data);
    setTitle("");
    router.push("/all");
  };
  return (
    <section className="w-[80%] mt-10 md:12 mx-auto flex flex-col items-center justify-center gap-3 md:gap-5">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
        Add Todo
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (title) {
            addTodo();
            toast.success("Todo Added");
          }
        }}
        className="w-full md:w-[60%] flex items-center justify-center gap-3 "
      >
        <Input
          placeholder="New Todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Button type="submit" variant="default">
          ADD
        </Button>
      </form>
    </section>
  );
};

export default page;
