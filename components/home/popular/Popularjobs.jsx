import React from 'react';
import { useState } from 'react'
import { View, Text ,TouchableOpacity,FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import  PopularJobsCards from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
  const router =useRouter();
  const isLoading = false;
  const error =false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style = {styles.headerTitle}>popular jobs</Text>
        <TouchableOpacity>
          <Text style= {styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
          <View style= {styles.cardsContainer}>
              {isLoading ? (
                <ActivityIndicator SIZES = "large" COLORS={COLORS.primary}/>
              ) : error ? (
                  <Text>Somthing went wrong</Text>
              ):(
                <FlatList 
                  data = {[1, 2 , 3 ,4 ]}
                  renderItem={(item) =>(
                    <PopularJobsCards
                        item={item}
                    />
                  )}
                />
              )}
          </View>
    </View>
  )
}

export default Popularjobs