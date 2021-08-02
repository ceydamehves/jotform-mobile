import * as React from 'react';
import { Alert, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/Themed';
import { Video } from 'expo-av';
import SingleChoice from 'react-native-single-choice';
import { styles } from '../../styles/questionStyles'; 
import { useState } from 'react';

export default function ControlRadio(props: any) {
  const {c} = props

  const securityMethodOptions = [
    {
      key: "pin",
      text: c["options"].split('|')[0]
    },
    {
      key: "later",
      text: c["options"].split('|')[1]
    }
  ];
  const [securityMethod, setSecurityMethod] = useState({ method: "pin" });
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
          <SingleChoice
              options={securityMethodOptions}
              defaultValue={securityMethod}
              keyName='method'
              selectDirection='column'
              setValueFunc={setSecurityMethod}
            />
        </View>
    )
};