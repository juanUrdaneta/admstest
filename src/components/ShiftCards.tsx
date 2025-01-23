"use client";
import useLOP from "@/lib/hooks/useLOP";
import React, { useEffect } from "react";
import Card from "./Card";
import { useCard } from "@/lib/context/cards";

type Props = {
  lineId: string;
};

const ShiftCards = (props: Props) => {
  const { getCardsForLineId } = useLOP();
  const { cards } = useCard();
  useEffect(() => {
    getCardsForLineId(props.lineId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="my-2">
      <h2 className="mb-2">Shift 1</h2>
      <div className="flex gap-2 overflow-scroll">
        {cards && cards.map((card) => <Card {...card} key={card.cardId + (card.actual ?? 0)} />)}
      </div>
    </div>
  );
};

export default ShiftCards;
