import { GET_CONTENT, CONTENT_ERROR, ADD_ANSWERS } from "../types";
import axios from "axios";
import {apiKey} from '../../secret';

export const getcontent = () => async (dispatch) => {
  try {
    const res = await axios.get(
      (`https://api.jotform.com/form/211803091239046/questions?apiKey=` + apiKey.jotform)
    );

    dispatch({
      type: GET_CONTENT,
      payload: res.data.content
    });
  } catch (e) {
    dispatch({
      type: CONTENT_ERROR,
      payload: console.log(e)
    });
  }
};

export const addAnswers = (answers) => {
  return {
      type: ADD_ANSWERS,
      payload: answers
  };
};