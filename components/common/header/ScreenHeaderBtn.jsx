import React from 'react'
import { TouchableOpacity , Image, TouchableOpacityComponent } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension , handelPress}) => {
  return (
      <TouchableOpacity style= {styles.btnContainer} onPress={{handelPress}}>
        <Image  
          source={iconUrl}
          resizeMode="cover"
          Style ={styles.btnImg(dimension)}
        />

      </TouchableOpacity>
  )
}

export default ScreenHeaderBtn