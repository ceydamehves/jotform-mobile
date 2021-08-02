import * as React from 'react';
import { TextInput, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/Themed';
import { Video } from 'expo-av';

import { styles } from '../../styles/questionStyles'; 

export default function ControlTextBox(props: any) {
  const {c} = props
  const [text, onChangeText] = React.useState("");
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
        onChangeText={onChangeText}
        value={text}
      />
    </View>
    )
};