import Card from "@/components/Card";
import React from "react";
export type CARD_TYPE = {
  timeFrame: {
    start: string;
    end: string;
  };
  target: number;
  actual: number | null;
  cardId: string;
};

const CARDS_MOCK_DATA: CARD_TYPE[] = [
  {
    timeFrame: {
      start: "9:00 AM",
      end: "10:00 AM",
    },
    target: 100,
    actual: 100,
    cardId: "12345",
  },
  {
    timeFrame: {
      start: "10:00 AM",
      end: "11:00 AM",
    },
    target: 100,
    actual: null,
    cardId: "76798",
  },
  {
    timeFrame: {
      start: "11:00 AM",
      end: "12:00 PM",
    },
    target: 100,
    actual: null,
    cardId: "12302",
  },
];

const SERIES_MOCK_DATA: { seriesName: string; cards: CARD_TYPE[] }[] = [
  {
    seriesName: "LINE A",
    cards: CARDS_MOCK_DATA,
  },
  {
    seriesName: "LINE B",
    cards: CARDS_MOCK_DATA,
  },
  {
    seriesName: "LINE C",
    cards: CARDS_MOCK_DATA,
  },
];

const page = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <h1>Dashboard</h1>
      {SERIES_MOCK_DATA.map((series, idx) => (
        <div className="my-2" key={idx}>
          <h2 className="mb-2">{series.seriesName}</h2>
          <div className="flex gap-2">
            {series.cards.map((card, idx) => (
              <Card {...card} key={idx} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
