import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // THE CODE THAT WE WANT TO RUN
    console.log('the count is', count);
    
    // OPTIONAL return function
    return () => {
      console.log('I am being cleaned up!');
    }
  }, [count]); // The dependency array

  const addNumber = () => {
    if(count < 100) {
      setCount(count+1);
    }
  }

  const subtractNumber = () => {
    if(count >= 1) {
      setCount(count-1);
    }
  }

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <TouchableOpacity
      style={styles.touchableButton}
      onPress={subtractNumber}
      >
        <Text style={styles.buttonText}>Sub</Text>
      </TouchableOpacity>
      <Button 
      title='Add'
      onPress={addNumber}
      color='yellow' 
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  touchableButton: {
    backgroundColor: 'blue',
    height: 30,
    width: 40,
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  }
})