import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export const About = () => {
  return (
    <View>
      <Text>You can find me online.</Text>
    </View>
  )
}

export const Posts = () => {

    let items: number[] = []
    
    useEffect (() => {
        for (let i = 0; i < 2500; i++) {
            items.push(i+1)
        }
    }, [])
    return (
      <View>
        <FlatList 
        keyExtractor={items => (items+1).toString()}
        data={items}
        renderItem={({item}) => (
            <Text>{item}</Text>
        )}
        />
      </View>
    )
  }

  export const Contact = () => {
    return (
      <View>
        <Text>Contacts</Text>
      </View>
    )
  }

const styles = StyleSheet.create({})