import * as React from 'react'
import {Component}  from 'react'
import { Alert, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/Themed';
import { Video } from 'expo-av';
import { styles } from '../../styles/questionStyles'; 
import SelectMultiple from 'react-native-select-multiple';

import { addAnswers } from "../actions/contentAction";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


export default function ControlCheckBox(props: any) {
  
  const {c} = props

  const options = [    
    { label: c["options"].split('|')[0], value: '0' },   
    { label: c["options"].split('|')[1], value: '1' }, 
    { label: c["options"].split('|')[2], value: '2' },
    { label: c["options"].split('|')[3], value: '3' },
  ]

  const [selectedOptions, onSelectionsChange] = useState([]);
  var selectedMultiple = selectedOptions
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAnswers(selectedOptions))
  }, []);
  console.log(addAnswers(selectedOptions))

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
