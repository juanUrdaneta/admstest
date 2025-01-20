import React from "react";

const page = () => {
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
      <h1 className="text-black text-2xl mb-6">Welcome to ADMS</h1>
      <div className="flex flex-col w-[500px]">
        <div className="mb-4 flex flex-col">
          <label className="text-black" htmlFor="email">
            Email
          </label>
          <input
            className="px-4 py-2 rounded border-black border text-black"
            type="text"
            name="email"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label className="text-black" htmlFor="password">
            Password
          </label>
          <input
            className="px-4 py-2 rounded border-black border text-black"
            type="password"
            name="password"
            id=""
          />
        </div>
        <button className="px-4 py-2 bg-black text-white rounded mt-4 font-semibold">Log in</button>
      </div>
    </div>
  );
};

export default page;
