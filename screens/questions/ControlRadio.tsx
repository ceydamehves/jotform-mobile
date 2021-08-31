import * as React from 'react';

import { Text, View } from '../../components/Themed';
import { Video } from 'expo-av';
import SelectMultiple from 'react-native-select-multiple';
import { styles } from '../../styles/questionStyles'; 

import { addAnswers } from "../actions/contentAction";
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function ControlRadio(props: any) {
  
  const {c} = props
  const options = c["options"].split("|").map((x) => ({"label": x, "value": x}))  
  const [selectedOptions, onSelectionsChange] = useState([]);  
  const dispatch = useDispatch();
  
  function changeText(choice){
    
    onSelectionsChange(choice)
    var value = choice[0].value
    dispatch(addAnswers({value, "qid":c.qid, "name":c.name}))
  } 
  
    return(
    <View>
      <Video
      source={{ uri: c["description"].toString() }} 
      shouldPlay
      isLooping
      resizeMode="cover"
      style={styles.backgroundVideo}
      />
      <Text style={styles.title}>{c["text"]}.</Text>
      <SelectMultiple
            items={options}
            selectedItems={selectedOptions}
            onSelectionsChange={changeText} 
            maxSelect={1}/>
    </View>
    )
};

