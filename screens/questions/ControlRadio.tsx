import * as React from 'react';
import { Alert, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/Themed';
import { Video } from 'expo-av';
import SelectMultiple from 'react-native-select-multiple';
import { styles } from '../../styles/questionStyles'; 
import { useState } from 'react';


export default function ControlRadio(props: any) {
  
  const {c} = props


  const options = [    
    { label: c["options"].split('|')[0], value: '0' },   
    { label: c["options"].split('|')[1], value: '1' }
  ]

  const [selectedOptions, onSelectionsChange] = useState([]);
  var selectedSingle = selectedOptions
  console.log(selectedSingle)
  

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
            selectedItems={selectedSingle}
            onSelectionsChange={onSelectionsChange} 
            maxSelect={1}/>
    </View>
    )
};

