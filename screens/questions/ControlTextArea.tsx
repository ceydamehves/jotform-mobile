import * as React from 'react';
import { TouchableOpacity, TextInput} from 'react-native';
import { Text, View } from '../../components/Themed';
import { Video } from 'expo-av';

import { styles } from '../../styles/questionStyles'; 

import { addAnswers } from "../actions/contentAction";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export default function ControlTextArea(props: any) {
  const {c} = props 

  const [longText, changeText] = useState('');

  const stringInputLong = new Array();
  stringInputLong.push({longText})

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAnswers({longText}))
  }, []);
  console.log(addAnswers({longText}))
  
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
        style={styles.longInput}
        multiline={true}
        numberOfLines={4}
        maxLength={100}
        placeholder='Enter your answer.'
        onChangeText={(val) => changeText(val)}
      />
    </View>
    )
    
};
