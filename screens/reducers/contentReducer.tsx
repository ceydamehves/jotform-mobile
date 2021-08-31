import { GET_CONTENT, ADD_ANSWERS } from "../types";

const initialState = {
  questions: [],
  answers: {},
  loading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        questions: action.payload,
        loading: false
      };
      case ADD_ANSWERS:
        state.answers["q" + action.payload.qid + "_" + action.payload.name] = action.payload
      return state     
    default:
      return state;
  }
}
