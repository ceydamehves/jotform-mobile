import * as React from 'react';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Text, View } from '../components/Themed';
import {apiKey} from '../secret';
import ControlRadio from './questions/ControlRadio';
import ControlTextBox from './questions/ControlTextBox';
import ControlTextArea from './questions/ControlTextArea';
import ControlCheckBox from './questions/ControlCheckBox';

const questionBuilders: {[index: string]: any} = {
    "control_radio": (c: any) =>  (<ControlRadio c={c}/>),
    "control_textbox": (c: any) => (<ControlTextBox c={c}/>),
    "control_textarea": (c: any) => (<ControlTextArea c={c}/>),
    "control_checkbox": (c: any) => (<ControlCheckBox c={c}/>)
}

export default function FirstQuestion( {navigation}: {navigation: any} ) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<{[index: string]:any}>({});
  const [currrentQuestion, setCurrentQuestion] = useState<number>(1);

  
  useEffect(() => {
    axios('https://api.jotform.com/form/211803091239046/questions?apiKey=' + apiKey.jotform)
      .then(response => setData(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [1]);
  console.log(data)

  function nextQuestion(){
    var tempCQuestion = currrentQuestion
    var last: number = parseInt(Object.keys(data['content'])[Object.keys(data['content']).length - 1])
    // question id problem solution.
    do {
      tempCQuestion = tempCQuestion + 1;
    }while(data['content'][(tempCQuestion).toString()] === undefined && tempCQuestion <= last)
    
    if(tempCQuestion > last){
      // there is no next question
      return
    }
    setCurrentQuestion(tempCQuestion)
  }

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? <Text>Loading...</Text> : 
      (
        <View style={{ flex:1 }}>   
          {(questionBuilders[data['content'][currrentQuestion.toString()]["type"]])(data['content'][currrentQuestion.toString()])}
          <TouchableOpacity onPress={nextQuestion}>
            <Text>NEXT BUTTON</Text>
          </TouchableOpacity>
        </View>
      )} 
    </View>
  );
};

  