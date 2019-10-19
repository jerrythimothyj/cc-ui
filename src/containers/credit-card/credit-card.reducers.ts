import { CREDIT_CARD_DATA_LOADED, CREDIT_CARD_ADD_API_SUCCESS, CREDIT_CARD_ADD_API_ERRORED, CREDIT_CARD_STAGE_INPUT_DATA_REQUESTED } from "./credit-card.constants";

const initialState = {
  creditCards: [],
  errors: [],
  stagedInputData: {}
};

function creditCardReducer(state = initialState, action: any) {
  switch (action.type) {
    case CREDIT_CARD_DATA_LOADED:
      return { ...state, creditCards: action.payload }
    case CREDIT_CARD_ADD_API_ERRORED:
      return { ...state, errors: action.payload }
    case CREDIT_CARD_ADD_API_SUCCESS:
      return { ...state, errors: [], stagedInputData: {}, creditCards: state.creditCards.concat(action.payload) }
    case CREDIT_CARD_STAGE_INPUT_DATA_REQUESTED:
      return { ...state, stagedInputData: { ...state.stagedInputData, [action.field]: action.value } }
    default:
      return state
  }
}

export default creditCardReducer;