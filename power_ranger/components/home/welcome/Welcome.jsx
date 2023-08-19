import React from 'react'
import { useState } from 'react'
import { View, Text } from 'react-native'
import{
  View, Text , TextInput , TouchableOpacity , Image , FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons , SIZES } from '../../../constants';
const Welcome = () => {
  const router =useRouter();
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
      </View>
    </View>
  )
}

export default Welcome