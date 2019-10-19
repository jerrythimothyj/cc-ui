import { CREDIT_CARD_DATA_REQUESTED } from "./credit-card.constants";

export function getData() {
  return { type: CREDIT_CARD_DATA_REQUESTED };
}