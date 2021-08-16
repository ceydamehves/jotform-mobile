import { GET_CONTENT } from "../types";

const initialState = {
  forms: [],
  loading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        forms: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
