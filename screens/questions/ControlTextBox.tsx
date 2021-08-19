import * as React from 'react';
import { TextInput, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/Themed';
import { Video } from 'expo-av';

import { styles } from '../../styles/questionStyles'; 

import { addAnswers } from "../actions/contentAction";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export default function ControlTextBox(props: any) {
  const {c} = props

  const [shortText, changeText] = useState('');

  const stringInputShort = new Array();
  stringInputShort.push({shortText})
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAnswers({shortText}))
  }, []);
  console.log(addAnswers({shortText}))
  
    return(
    <View>
      <Video
      source={{ uri: c["description"].toString() }} 
      shouldPlay
      isLooping
      resizeMode="cover"
      style={styles.backgroundVideo}
      /><Text style={styles.title}>{c["text"]}.</Text>

      <TextInput
        style={styles.shortInput}
        maxLength={50}
        placeholder='Enter your answer.'
        onChangeText={(val) => changeText(val)}
      />
    </View>
    )
    
};