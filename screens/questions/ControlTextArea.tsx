import * as React from 'react';
import { TouchableOpacity, TextInput} from 'react-native';
import { Text, View } from '../../components/Themed';
import { Video } from 'expo-av';

import { styles } from '../../styles/questionStyles'; 



export default function ControlTextBox(props: any) {
  const {c} = props

  const MultilineTextInput = (props: any) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
      />
    );
  }
    const [value, onChangeText] = React.useState("");

    return(
    <View>
      <Video
      source={{ uri: c["description"].toString() }} 
      shouldPlay
      isLooping
      resizeMode="cover"
      style={styles.backgroundVideo}
      /><Text style={styles.title}>{c["text"]}.</Text>

    <MultilineTextInput
        style={{borderColor:'black', borderWidth:2}}
        multiline
        numberOfLines={4}
        onChangeText={(text: any) => onChangeText(text)}
        value={value}
      />
    </View>
    )
};