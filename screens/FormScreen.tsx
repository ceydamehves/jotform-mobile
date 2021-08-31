import * as React from 'react';

import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';

import ControlRadio from './questions/ControlRadio';
import ControlTextBox from './questions/ControlTextBox';
import ControlTextArea from './questions/ControlTextArea';
import ControlCheckBox from './questions/ControlCheckBox';

import { getcontent } from "./actions/contentAction";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import {apiKey} from '../secret';

const questionBuilders: {[index: string]: any} = {
    "control_radio": (c: any) =>  (<ControlRadio c={c}/>),
    "control_textbox": (c: any) => (<ControlTextBox c={c}/>),
    "control_textarea": (c: any) => (<ControlTextArea c={c}/>),
    "control_checkbox": (c: any) => (<ControlCheckBox c={c}/>)
} 

export default function FormScreen( {navigation}: {navigation: any} ) {

  const forms = useSelector((state: any) => state.forms);
  const [currrentQuestion, setCurrentQuestion] = useState<number>(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcontent())
  }, []);

  // const test = JSON.stringify(forms) 

  function nextQuestion(){
    var tempCQuestion = currrentQuestion
    var lastQuestion: number = parseInt(Object.keys(forms['questions'])[Object.keys(forms['questions']).length - 1])
    // question id problem solution.(if it is not in order :: 1 -> 3)
    do {
      tempCQuestion = tempCQuestion + 1;
    }while(forms['questions'][(tempCQuestion).toString()] === undefined && tempCQuestion <= lastQuestion)
    
    if(tempCQuestion > lastQuestion){
      // there is no next question
      return
    }
    setCurrentQuestion(tempCQuestion)
  }     

  function submitButton(){      
    var submission = new FormData()
    Object.values(forms.answers).forEach((element: any) => {
      
      if(Array.isArray(element.value)){
        element.value.forEach(el => {
          submission.append(`submission[${element.qid}][]`, el)
        });
      }
      else{
        submission.append(`submission[${element.qid}]`, element.value)
      }
    });
    console.log(submission)

    axios({
      url: `https://api.jotform.com/form/211803091239046/submissions?apiKey=${apiKey.jotform}`, 
      method: 'post',
      data: submission,
    })
    .then(function (response) {
        // your action after success
        console.log(response);
    })
    .catch(function (error) {
       // your action on error success
        console.log(error);
    });     
  }

  
  return (
    <View style={{ flex: 1 }}>      
      <View style={{ flex: 1 }}>   
        {(questionBuilders[forms['questions'][currrentQuestion.toString()]["type"]])(forms['questions'][currrentQuestion.toString()])}
        
          {parseInt(Object.keys(forms['questions'])[Object.keys(forms['questions']).length - 1]) == (forms['questions'][currrentQuestion.toString()]["qid"]) ?(
            <TouchableOpacity style={{marginTop:20}} onPress={submitButton}>
              <Text> SUBMIT BUTTON </Text>
            </TouchableOpacity>)
            :(
            <TouchableOpacity style={{marginTop:20}} onPress={nextQuestion}>
              <Text> NEXT BUTTON </Text>
            </TouchableOpacity>  
          )}                  
      </View>
    </View>
  );
};
