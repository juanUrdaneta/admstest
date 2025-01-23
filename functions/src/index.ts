import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { handleCardUpdate, handleGetCardsForLine } from "./handlers/handleCards";

export const acceptRequest = onRequest({ cors: true }, async (request, response) => {
  try {
    const apiParam = request.query.api;

    if (!apiParam) {
      response.status(400).send("Bad Request: Missing 'api' query parameter");
      return;
    }

    switch (apiParam) {
      case "update-card-output":
        await handleCardUpdate(request, response);
        break;
      case "get-cards-by-line":
        await handleGetCardsForLine(request, response);
        break;
      default:
        response.status(400).send("Bad Request: Invalid 'api' query parameter");
        break;
    }
  } catch (err) {
    logger.error(JSON.stringify(err), { structuredData: true });
    response.status(500).send("Internal Server Error");
  }
});
