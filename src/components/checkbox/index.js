import React, { memo } from 'react';

import {Image,  TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const CheckBox = ({checked, onCheck}) => {
 console.log('inside checkbox')
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => onCheck(!checked)}
      style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer} >
          <Image style={styles.checkIcon}source={require('../../assets/iconcheck.png')} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default memo(CheckBox);
