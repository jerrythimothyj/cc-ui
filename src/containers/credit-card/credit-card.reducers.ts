import { CREDIT_CARD_DATA_LOADED } from "./credit-card.constants";

const initialState = {
  creditCards: []
};

function creditCardReducer(state = initialState, action: any) {
  switch(action.type) {
    case CREDIT_CARD_DATA_LOADED:
      return {...state, creditCards: action.payload}
    default:
      return state
  }
}

export default creditCardReducer;