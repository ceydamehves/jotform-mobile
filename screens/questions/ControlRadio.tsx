import * as React from 'react';
import { Alert, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/Themed';
import { Video } from 'expo-av';

import { styles } from '../../styles/questionStyles'; 

export default function ControlRadio(props: any) {
  const {c} = props
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
    )
};