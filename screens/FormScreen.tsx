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

  const test = JSON.stringify(forms)
  console.log(test)

  function nextQuestion(){
    var tempCQuestion = currrentQuestion
    var lastQuestion: number = parseInt(Object.keys(forms['forms']['content'])[Object.keys(forms['forms']['content']).length - 1])
    // question id problem solution.(if it is not in order :: 1 -> 3)
    do {
      tempCQuestion = tempCQuestion + 1;
    }while(forms['forms']['content'][(tempCQuestion).toString()] === undefined && tempCQuestion <= lastQuestion)
    
    if(tempCQuestion > lastQuestion){
      // there is no next question
      return
    }
    setCurrentQuestion(tempCQuestion)
  }  

  return (
    <View style={{ flex: 1 }}>      
        <View style={{ flex:1 }}>   
          {(questionBuilders[forms['forms']['content'][currrentQuestion.toString()]["type"]])(forms['forms']['content'][currrentQuestion.toString()])}
          <TouchableOpacity style={{marginTop:20}} onPress={nextQuestion}>
            <Text>NEXT BUTTON</Text>
          </TouchableOpacity>          
        </View>
        <Text>{test}</Text>   
    </View>
  );
};
