import React from 'react'
import { useState } from 'react'
import { View, Text } from 'react-native'
import{
  View, Text , TextInput , TouchableOpacity , Image , FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons , SIZES } from '../../../constants';

const jopTypes =["Full-time" , "part-time" , "Contractor"]

const Welcome = () => {
  const router =useRouter();
  const [activeJopTybe, setActiveJopTybe] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}> 
         <Text style = {styles.userName}>Hello Hamda</Text>
         <Text style = {styles.welcomeMessage}>Discover the new scores in football world </Text>
      </View>
      <View style= {styles.searchContainer}>
            <View style = {styles.searchWrapper}>
                  <TextInput 
                  style={styles.searchInput}
                  value=""
                  onChange={() => {}}
                  placeholder="What are you loking for ?"
                  />
            </View>
            <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
              <Image
                source={icons.search}
                resizeMode="contain"
                style={styles.searchBtnImage}
              />
            </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
          <FlatList 
            data={jopTypes}
            renderItem={(item) => (
              <TouchableOpacity
                style={styles.tab(activeJopTybe , item)}
                onPress={() => {
                  setActiveJopTybe(item);
                  router.push(`/search/${item}`)
                }}
              >
                <Text style={styles.tabText(activeJopTybe , item  )}>{item}</Text>
              </TouchableOpacity>
            )}
                keyExtractor={item => item }
                contentContainerStyle={{columnGap:SIZES.small}}
                horizontal 
          />
      </View>
    </View>
  )
}

export default Welcome