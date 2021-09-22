import * as React from 'react';
import { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import { Text, View } from '../components/Themed';
import { styles } from '../styles/questionStyles'; 

import {apiKey} from '../secret';


export default function HomeScreen( {navigation}: {navigation: any} ) {

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
        <View>
        <Text style={styles.description}>{data["content"]["username"]}'s Forms.</Text>
        <FlatList
          data={["content"]}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.flatListItem}
                              onPress={() => navigation.navigate('FormScreen')}> 
              <Text style={styles.flatListText}>{data[item].title}</Text>
            </TouchableOpacity>
          )}
          />
        </View>
      )} 
    </View>
  );
};
