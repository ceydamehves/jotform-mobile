import * as React from 'react';
import { useEffect, useState } from 'react';
import { Alert, TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';
import { Text, View } from '../components/Themed';
import { styles } from '../styles/questionStyles'; 

import {apiKey} from '../secret';

import { Video } from 'expo-av';

const questionBuilders: {[index: string]: any} = {
    "control_radio": (c: any) =>  (
      <View>
            <Video
              source={{ uri: c["description"].toString() }} 
              shouldPlay
              isLooping
              resizeMode="cover"
              style={styles.backgroundVideo}
            />
  <Text style={styles.title}>{c["text"]}.</Text>
  
  <TouchableOpacity
    style={styles.button}
    onPress={() => Alert.alert('pressed')}>
      <Text style={styles.choice}>A</Text>
    <Text style={styles.buttonText}>{c["options"].split('|')[0]}</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.button}
    onPress={() => Alert.alert('pressed')}>
    <Text style={styles.choice}>B</Text>
    <Text style={styles.buttonText}>{c["options"].split('|')[1]}</Text>
  </TouchableOpacity>
  </View>
  ),
    "control_textbox": (c: any) => (
    <View>
      <Video
      source={{ uri: c["description"].toString() }} 
      shouldPlay
      isLooping
      resizeMode="cover"
      style={styles.backgroundVideo}
    /><Text style={styles.title}>{c["text"]}.</Text>
    </View>),
    "control_textarea": (c: any) => (<View><Video
      source={{ uri: c["description"].toString() }} 
      shouldPlay
      isLooping
      resizeMode="cover"
      style={styles.backgroundVideo}
    /><Text style={styles.title}>{c["text"]}.</Text></View>),
    "control_checkbox": (c: any) => (<View><Video
      source={{ uri: c["description"].toString() }} 
      shouldPlay
      isLooping
      resizeMode="cover"
      style={styles.backgroundVideo}
    /><Text style={styles.title}>{c["text"]}.</Text></View>)
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

  