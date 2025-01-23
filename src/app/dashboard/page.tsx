import Navbar from "@/components/Navbar";
import ShiftCards from "@/components/ShiftCards";
import { CardProvider } from "@/lib/context/cards";
import React from "react";

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Navbar />
      <div className="p-2 w-full">
        <CardProvider>
          <ShiftCards lineId="2" />
        </CardProvider>
      </div>
    </div>
  );
};

export default page;
