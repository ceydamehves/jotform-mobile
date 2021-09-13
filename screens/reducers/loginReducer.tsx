import { GET_AUTH, SIGN_IN } from "../types";

const initialState = {
  isSignout: true,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignout: false,
        user: action
      };  
      default:
      case GET_AUTH:
      return state         
    }
}
