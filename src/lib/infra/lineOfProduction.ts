export type CardType = {
  cardId: string;
  target: number;
  actual: number | null;
  start: number;
  end: number;
};

export interface LineOfProductionConfig {
  getCardsForLineOfProduction: (lineId: string) => Promise<CardType[]>;
  updateCardOutput: (cardId: number, shift_id: number, actualOutput: number) => Promise<void>;
}

export class LineOfProductionCloudFunction implements LineOfProductionConfig {
  constructor() {}

  private static instance: LineOfProductionCloudFunction;

  public static getInstance() {
    if (!LineOfProductionCloudFunction.instance) {
      LineOfProductionCloudFunction.instance = new LineOfProductionCloudFunction();
    }
    return LineOfProductionCloudFunction.instance;
  }

  async updateCardOutput(cardId: number, shiftId: number, actualOutput: number): Promise<void> {
    const response = await fetch(
      `https://us-central1-adms-test-e5d12.cloudfunctions.net/acceptRequest?api=update-card-output`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shift_id: shiftId,
          card_id: cardId,
          actual_output: actualOutput,
        }),
      },
    );
    if (!response.ok) {
      throw new Error("Failed to update card output");
    }
    return;
  }

  async getCardsForLineOfProduction(lineId: string): Promise<CardType[]> {
    const response = await fetch(
      `https://us-central1-adms-test-e5d12.cloudfunctions.net/acceptRequest?api=get-cards-by-line&line_id=${lineId}`,
    );
    if (response.ok) {
      const responseObj = await response.json();
      if (Array.isArray(responseObj)) {
        return responseObj
          .map((card) => {
            return {
              cardId: card.id,
              target: card.target_output,
              actual: card.actual_output,
              start: card.time_start,
              end: card.time_end,
            };
          })
          .sort((a, b) => a.cardId - b.cardId);
      }
    }
    return [];
  }
}
