import React, { memo } from 'react';
import { TextInput } from 'react-native';

const CustomTextInput = ({onChange, placeholder}) => {
    console.log(placeholder, 'rendered');
    
  return (
    <TextInput placeholder={placeholder} onChangeText={onChange} />
  )
}

export default memo(CustomTextInput)