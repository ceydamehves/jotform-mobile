import * as React from 'react';
import {Component} from 'react';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Text, View } from '../components/Themed';
import {apiKey} from '../secret';
import ControlRadio from './questions/ControlRadio';
import ControlTextBox from './questions/ControlTextBox';
import ControlTextArea from './questions/ControlTextArea';
import ControlCheckBox from './questions/ControlCheckBox';

import { connect } from "react-redux";
import { getcontent } from "./actions/contentAction";
/* import { useSelector, useDispatch } from 'react-redux';
import { show } from './actions';

const questionBuilders: {[index: string]: any} = {
    "control_radio": (c: any) =>  (<ControlRadio c={c}/>),
    "control_textbox": (c: any) => (<ControlTextBox c={c}/>),
    "control_textarea": (c: any) => (<ControlTextArea c={c}/>),
    "control_checkbox": (c: any) => (<ControlCheckBox c={c}/>)
} */

class FormScreen extends React.Component<any> {
  componentDidMount() {
    this.props.getcontent();
  }
  render() {
    const { forms } = this.props.forms;
    console.log(this.props.forms);

    const test = JSON.stringify(forms)
    return (
      <Text>
          {test}
       </Text>
    ); 
  }
}

const mapStateToProps = (state) => ({ forms: state.forms });

export default connect(mapStateToProps, { getcontent })(FormScreen);

/* 
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

const counter = useSelector((state: any) => state.counter);
const dispatch = useDispatch();

  function nextQuestion(){
    var tempCQuestion = currrentQuestion
    var lastQuestion: number = parseInt(Object.keys(data['content'])[Object.keys(data['content']).length - 1])
    // question id problem solution.(if it is not in order :: 1 -> 3)
    do {
      tempCQuestion = tempCQuestion + 1;
    }while(data['content'][(tempCQuestion).toString()] === undefined && tempCQuestion <= lastQuestion)
    
    if(tempCQuestion > lastQuestion){
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
          <TouchableOpacity style={{marginTop:20}} onPress={nextQuestion}>
            <Text>NEXT BUTTON</Text>
          </TouchableOpacity>          
        </View>
      )} 
      <Text>COUNTER {counter}</Text>
      <TouchableOpacity style={{marginTop:20}} onPress={() => dispatch(increment(1))}>
            <Text>INCREMENT BUTTON</Text>
      </TouchableOpacity>  
      <TouchableOpacity style={{marginTop:20}} onPress={() => dispatch(decrement())}>
            <Text>DECREMENT BUTTON</Text>
      </TouchableOpacity>
    </View>
  );
};
 */