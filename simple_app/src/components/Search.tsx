import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { memo } from 'react'

interface SearchProps {
    onChange: (text:string) => void;
}

const Search = ({onChange}: SearchProps) => {
    console.log('Search rendered');
    
  return (
    <TextInput placeholder="enter username" onChangeText={onChange} />
  )
}

export default memo(Search)

const styles = StyleSheet.create({});