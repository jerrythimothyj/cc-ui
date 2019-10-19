import { CREDIT_CARD_DATA_REQUESTED, CREDIT_CARD_ADD_REQUESTED, CREDIT_CARD_STAGE_INPUT_DATA_REQUESTED } from "./credit-card.constants";

export const getData = () => ({
  type: CREDIT_CARD_DATA_REQUESTED
})

export const addCreditCard = (stagedInputData: Object) => ({
  type: CREDIT_CARD_ADD_REQUESTED,
  stagedInputData
})

export const stageInputData = (field: string, value: string) => ({
  type: CREDIT_CARD_STAGE_INPUT_DATA_REQUESTED,
  field,
  value
})