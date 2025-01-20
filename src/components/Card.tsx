"use client";

import React from "react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import CardInputModal from "./CardInputModal";

const { theme } = resolveConfig(tailwindConfig);

type Props = {
  timeFrame: {
    start: string;
    end: string;
  };
  target: number;
  actual: number | null;
  cardId: string;
};

const Card = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div onClick={() => setIsModalOpen(true)} className="flex flex-col w-[120px] select-none">
      <div
        className={"flex flex-col justify-between p-2 rounded"}
        style={{
          backgroundColor:
            props.actual === null
              ? theme.colors.slate[400]
              : props.target === props.actual
              ? theme.colors.green[400]
              : theme.colors.red[400],
        }}
      >
        <p className=" border-b-2 border-b-black">Actual: {props.actual}</p>
        <p className=" ">Target: {props.target}</p>
      </div>
      <div>
        <p className="text-center text-xs">
          {props.timeFrame.start}-{props.timeFrame.end}
        </p>
      </div>
      <CardInputModal isOpen={isModalOpen} card={props} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Card;
