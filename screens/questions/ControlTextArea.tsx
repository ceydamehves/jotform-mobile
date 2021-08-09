import * as React from 'react';
import { TouchableOpacity, TextInput} from 'react-native';
import { Text, View } from '../../components/Themed';
import { Video } from 'expo-av';

import { styles } from '../../styles/questionStyles'; 
import { useState } from 'react';

export default function ControlTextArea(props: any) {
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
