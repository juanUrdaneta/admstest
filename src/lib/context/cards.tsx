"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { CardType } from "../infra/lineOfProduction";

type CardContextType = {
  cards: CardType[] | null;
  setCard: (card: CardType[]) => void;
};

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCard] = useState<CardType[] | null>(null);

  return <CardContext.Provider value={{ cards, setCard }}>{children}</CardContext.Provider>;
};

export const useCard = (): CardContextType => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error("useCard must be used within a CardProvider");
  }
  return context;
};
