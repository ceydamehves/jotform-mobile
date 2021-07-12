import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import { Text, View } from '../components/Themed';

import {apiKey} from '../secret';


export default function TabOneScreen( {navigation}: {navigation: any} ) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<{[index: string]:any}>({});
  console.log(data)
  
  useEffect(() => {
    axios('https://api.jotform.com/form/211803091239046?apiKey=' + apiKey.jotform)
      .then(response => setData(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [1]);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? <Text>Loading...</Text> : 
      (
        <FlatList
          data={["content"]}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('FormScreen')}> 
              <Text style={styles.item}>{data[item].title}</Text>
            </TouchableOpacity>
          )}
          />
      )} 
    </View>
  );
};

const styles = StyleSheet.create({
  item:{
    alignSelf:'center',
    marginTop:20,
    marginHorizontal:10,
    padding:30,
    backgroundColor:'yellow',
    fontSize:20
  },
})