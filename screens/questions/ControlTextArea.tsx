import * as React from 'react';
import { Alert, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/Themed';
import { Video } from 'expo-av';

import { styles } from '../../styles/questionStyles'; 

export default function ControlTextBox(props: any) {
  const {c} = props
    return(
    <View>
      <Video
      source={{ uri: c["description"].toString() }} 
      shouldPlay
      isLooping
      resizeMode="cover"
      style={styles.backgroundVideo}
      /><Text style={styles.title}>{c["text"]}.</Text>
    </View>
    )
};