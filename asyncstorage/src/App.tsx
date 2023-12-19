import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
const App = (): JSX.Element => {

  const [isLoading, setIsLoading] = useState(true)
  const [counter, setCounter] = useState(0)
  const [greeting, setGreeting] = useState('')
  const [name, setName] = useState('')
  const [greetingInfo, setGreetingInfo] = useState({name: '', greeting: ''})

  const getData = async () => {
    // Multiget
    const values = await AsyncStorage.multiGet(['@counter', '@greeting'])
   //  values format will be: [["@counter", "5"], ["@greeting", "{\"greeting\":\"Good Morning\",\"name\":\"Beckham\"}"]]
    values.forEach(value => { 
      if(value[0] === '@counter') {
        const count = value[1] == null ? null : parseInt(value[1])
        setCounter(count === null || isNaN(count) ? 0 : count)
      }
      else if(value[0] === '@greeting') {
        if(value[1]) setGreetingInfo(JSON.parse(value[1]))
      }
    })

    // Alternate way is calling getItem() method, if we have single key
    // const countValue = await AsyncStorage.getItem('@counter')
    // const count = countValue === null ? 0 : parseInt(countValue)
    // setCounter(isNaN(count) ? 0 : count)

    // const greeting = await AsyncStorage.getItem('@greeting')
    // setGreeting(greeting == null ? '' : JSON.parse(greeting))
    setIsLoading(false)
  }

  // When component is loaded, data will be loaded.
  useEffect(() => {
    getData()
  }, [])

  if(isLoading) {
    return (
      <View style={[styles.container, styles.loadingColor]}>
        <Text style={styles.textColor}>Loading</Text>
      </View>
    )
  }

  const incrementCounter = async () => {
    await AsyncStorage.setItem('@counter', (counter+1).toString())
    setCounter(counter+1)
  }

  const saveGreeting = async () => {
    const greetingToSave = {
      greeting: greeting,
      name: name
    }

    await AsyncStorage.setItem('@greeting', JSON.stringify(greetingToSave))
    setGreetingInfo(greetingToSave)
  }
  
  return (
    <View style={[styles.container, styles.loadedColor]}>
      <Text style={styles.textColor} >Count: {counter}</Text>
      <Button
      title='Increment count'
      onPress={incrementCounter} />
      <View style={styles.divider} ></View>
      <Text>Saved Greeting</Text>
      {greetingInfo ? <Text>
        {greetingInfo.greeting}, {greetingInfo.name}
      </Text> : <Text>None</Text>}
      <TextInput 
      style={styles.input}
      onChangeText={setGreeting}
      placeholder='Greeting'
      value={greeting}
      placeholderTextColor={'yellow'}
      />
      <TextInput 
      style={styles.input}
      onChangeText={setName}
      placeholder='Name'
      value={name}
      placeholderTextColor={'yellow'}
      />
      <Button 
      title='Save greeting'
      onPress={saveGreeting}
      />
      <StatusBar 
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  loadingColor: {
    backgroundColor: 'yellow',
  },
  loadedColor: {
    backgroundColor: 'lightblue',
 },
  textColor: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  divider: {
    padding: 8
  },
  input: {
    height: 20,
    margin: 8,
    alignSelf: 'stretch',
    borderBottomColor: '#00aa77' ,
    borderBottomWidth: 2,
    color: 'green'
  }
})