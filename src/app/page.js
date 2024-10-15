import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section class="mx-auto w-full flex flex-col items-center gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
      <h1 class="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
        Todo List
      </h1>
      <p class="max-w-2xl text-lg font-light text-foreground">
        Manage your todos and be regular
      </p>
      <div class="flex mx-auto w-full items-center justify-center gap-2 py-2">
        <Link href={"/all"}>
          <Button size="sm">All Todos</Button>
        </Link>
        <Link href={"/add"}>
          {" "}
          <Button size="sm" variant="secondary">
            Add Todo
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default page;
