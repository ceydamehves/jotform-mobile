import { GET_CONTENT, CONTENT_ERROR } from "../types";
import axios from "axios";
import {apiKey} from '../../secret';

export const getcontent = () => async (dispatch) => {
  try {
    const res = await axios.get(
      (`https://api.jotform.com/form/211803091239046/questions?apiKey=` + apiKey.jotform)
    );

    dispatch({
      type: GET_CONTENT,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: CONTENT_ERROR,
      payload: console.log(e)
    });
  }
};
