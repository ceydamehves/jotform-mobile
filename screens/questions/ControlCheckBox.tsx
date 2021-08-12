import * as React from 'react'
import {Component}  from 'react'
import { Alert, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/Themed';
import { Video } from 'expo-av';
import { styles } from '../../styles/questionStyles'; 
import SelectMultiple from 'react-native-select-multiple';
import { useState } from 'react';


export default function ControlCheckBox(props: any) {
  
  const {c} = props

  /* var choiceCount: number = parseInt(c["spreadCols"]) 
  var arr=[]
  for (let x= 0; x<=choiceCount + 1; x++){   
    //reach the variable from outside the loop.
    arr.push(x);    
  }
   */

  const options = [    
    { label: c["options"].split('|')[0], value: '0' },   
    { label: c["options"].split('|')[1], value: '1' }, 
    { label: c["options"].split('|')[2], value: '2' },
    { label: c["options"].split('|')[3], value: '3' },
  ]

  const [selectedOptions, onSelectionsChange] = useState([]);
  var selectedMultiple = selectedOptions
  console.log(selectedMultiple)

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
            selectedItems={selectedMultiple}
            onSelectionsChange={onSelectionsChange}/>
    </View>
    )
};
