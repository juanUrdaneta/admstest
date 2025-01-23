import * as express from "express";
import { Request } from "firebase-functions/v2/https";
import { Card } from "../model/card";
import { getCardsByLine, updateCardOutput } from "../service/card";

const getQueryDTO = (requestBody: Record<string, string>): Card => {
  const { shift_id, card_id, actual_output } = requestBody;
  return new Card(shift_id, card_id, parseInt(actual_output));
};

export const handleCardUpdate = async (request: Request, response: express.Response) => {
  if (request.method !== "POST") {
    response.status(405).send("Method Not Allowed");
    return;
  }

  if (!request.body) {
    response.status(400).send("Bad Request: Missing request body");
    return;
  }

  const CardToUpdateDTO = getQueryDTO(request.body);

  const result = await updateCardOutput(CardToUpdateDTO);

  response.send(JSON.stringify(result));
};

export const handleGetCardsForLine = async (request: Request, response: express.Response) => {
  if (request.method !== "GET") {
    response.status(405).send("Method Not Allowed");
    return;
  }

  if (!request.query.line_id) {
    response.status(400).send("Bad Request: Missing 'line_id' query parameter");
    return;
  }

  const lineIdAsString = request.query.line_id as string;

  const result = await getCardsByLine(lineIdAsString);

  response.send(result.rows);
};
