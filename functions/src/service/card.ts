import { executeQuery } from "../infra/cloud-sql";
import { Card } from "../model/card";

const getAddCardQuery = (card: Card) => {
  return {
    text: "UPDATE cards SET actual_output = $1 WHERE id = $2 AND shift_id = $3",
    values: [card.actual_output, card.card_id, card.shift_id],
  };
};

export const updateCardOutput = async (card: Card) => {
  const { text, values } = getAddCardQuery(card);
  return executeQuery(text, values);
};

const getCardsByLineQuery = (lineId: string) => {
  return {
    text: `
      SELECT 
        cards.id,
        cards.time_start,
        cards.time_end,
        cards.actual_output,
        cards.target_output
      FROM CARDS
      INNER JOIN shift ON cards.shift_id = shift.id 
      WHERE shift.line_of_production_id = $1
    `,
    values: [lineId],
  };
};

export const getCardsByLine = async (lineId: string) => {
  const { text, values } = getCardsByLineQuery(lineId);
  return executeQuery(text, values);
};
