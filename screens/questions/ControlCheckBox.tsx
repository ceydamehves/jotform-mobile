import * as React from 'react'

import { Text, View } from '../../components/Themed';
import { Video } from 'expo-av';
import { styles } from '../../styles/questionStyles'; 
import SelectMultiple from 'react-native-select-multiple';

import { addAnswers } from "../actions/contentAction";
import { useDispatch } from 'react-redux';
import { useState } from 'react';


export default function ControlCheckBox(props: any) {
  
  const {c} = props
  const options = c["options"].split("|").map((x) => ({"label": x, "value": x}))
  const [selectedOptions, onSelectionsChange] = useState([]);

  var selectedMultiple = selectedOptions  
  const dispatch = useDispatch();
  
  function changeText(choices){
    onSelectionsChange(choices)
    var value = choices.map((x) => x.value)
    dispatch(addAnswers({value, "qid":c.qid, "name":c.name}))    
  }
  
    return(
      <View style={styles.questionContainer}>
        <View style={{flex: 1}}>
          <Video
          source={{ uri: c["description"].toString() }} 
          shouldPlay
          isLooping
          resizeMode="cover"
          style={styles.backgroundVideo}
          />
        </View>
        <View style={styles.answerContainer}>
          <Text style={styles.questionTitle}>{c["text"]}.</Text>
          <SelectMultiple
                items={options}
                selectedItems={selectedMultiple}
                onSelectionsChange={changeText}            
                style={styles.controlRadio}/>
        </View>
      </View>
    )
};
