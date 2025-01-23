import { useMemo } from "react";
import { LineOfProductionCloudFunction, LineOfProductionConfig } from "../infra/lineOfProduction";
import { useCard } from "../context/cards";

export const useLOP = () => {
  const lopService = useMemo<LineOfProductionConfig>(
    () => LineOfProductionCloudFunction.getInstance(),
    [],
  );

  const { setCard } = useCard();

  const getCardsForLineId = async (lineId: string) => {
    try {
      const updatedCards = await lopService.getCardsForLineOfProduction(lineId);
      setCard(updatedCards);
    } catch (err) {
      throw err;
    }
  };
  const updateCardOutput = async (
    card_id: number,
    shift_id: number,
    output: number,
    lineId: string,
  ) => {
    await lopService.updateCardOutput(card_id, shift_id, output);
    await getCardsForLineId(lineId);
  };

  return {
    updateCardOutput,
    getCardsForLineId,
  };
};

export default useLOP;
