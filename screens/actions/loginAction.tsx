import { SIGN_IN } from "../types";

export const signIn = (content) => {
    return {
        type: SIGN_IN,
        payload: content
    };
  };