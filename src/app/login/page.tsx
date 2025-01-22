"use client";
import LoginForm from "@/components/LoginForm";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-full">
      <h1 className="text-black text-2xl mb-6">Welcome to ADMS</h1>
      <LoginForm />
    </div>
  );
};

export default page;
