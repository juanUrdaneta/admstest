"use client";

import { CARD_TYPE } from "@/app/dashboard/page";
import React from "react";

type Props = {
  card: CARD_TYPE;
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
};

const CardInputModal = (props: Props) => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-[999] bg-black bg-opacity-50">
      <div className="w-[350px] max-w-2/3 h-[200px] bg-slate-200 relative rounded-lg p-4 flex justify-center items-center">
        <button
          className="absolute right-4 top-4"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Close button clicked");
            props.setIsModalOpen(false);
          }}
        >
          Save
        </button>

        <div className="flex items-center">
          <label className="mr-4">Actual Output</label>
          <input
            name="actual-output"
            type="number"
            className="px-2 py-1 rounded bg-white border border-slate-800"
          />
        </div>
      </div>
    </div>
  );
};

export default CardInputModal;
