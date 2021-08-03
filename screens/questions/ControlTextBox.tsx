import * as React from 'react';
import { TextInput, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/Themed';
import { Video } from 'expo-av';

import { styles } from '../../styles/questionStyles'; 
import { useState } from 'react';

export default function ControlTextBox(props: any) {
  const {c} = props

  const [text, changeText] = useState('');
  
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