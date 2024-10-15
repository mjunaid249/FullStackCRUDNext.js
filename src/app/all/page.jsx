"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import toast from "react-hot-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const page = () => {
  const [todoList, setTodoList] = useState([]);

  const getTodos = async () => {
    const res = await axios.get("http://localhost:3000/api/todo/get");
    const result = res.data;
    setTodoList(result);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    const res = await axios.delete("http://localhost:3000/api/todo/delete", {
      params: {
        id: id,
      },
    });
    getTodos();
    toast.success("Todo Deleted");
  };
  const completeTodo = async (id) => {
    const res = await axios.put(
      "http://localhost:3000/api/todo/put",
      {},
      {
        params: {
          id: id,
        },
      }
    );
    getTodos();
  };
  return (
    <div className="w-[80%] container mx-auto flex flex-col gap-3 mt-9 ">
      <h1 className="text-2xl text-center sm:text-3xl font-bold tracking-tight">
        All Todos
      </h1>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Todo</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todoList.map((item, index) => {
            return (
              <TableRow>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell
                  className={
                    item.isCompleted
                      ? "line-through decoration-4 decoration-red-500"
                      : ""
                  }
                >
                  {item.title}
                </TableCell>
                <TableCell>
                  {item.isCompleted ? (
                    <Badge>Completed</Badge>
                  ) : (
                    <Badge variant={"secondary"}>Pending</Badge>
                  )}
                </TableCell>
                <TableCell className="flex items-center justify-end gap-3">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button variant="secondary" size="sm">
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete Todo
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteTodo(item._id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  {item.isCompleted ? (
                    " "
                  ) : (
                    <Button size="sm" onClick={() => completeTodo(item._id)}>
                      Done
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
