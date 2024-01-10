import React, { memo } from 'react';
import { TextInput } from 'react-native';

const CustomTextInput = ({onChange, placeholder, value}) => {
  return (
    <TextInput value={value} placeholder={placeholder} onChangeText={onChange} />
  )
}

export default memo(CustomTextInput)