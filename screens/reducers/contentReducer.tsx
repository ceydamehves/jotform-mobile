import { GET_CONTENT, ADD_ANSWERS } from "../types";

const initialState = {
  questions: [],
  answers: [],
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
      return {
        ...state,
        answers: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
