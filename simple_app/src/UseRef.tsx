import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
  // Hooks always run after things are rendered
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef<TextInput | null>(null);

  useEffect(() => {
    // IT WILL RUN ONLY WHEN COMPONENT IS MOUNTED
    inputRef.current?.focus();
  });

  const addNumber = () => {
    if (count < 100) {
      setCount(count + 1);
      countRef.current++;

      // WHEN BUTTON IS CLICKED, count will be logged as 0 and countRef as 1
      // BECAUSE count value will be updated only after re-rendering
      // WHEREAS countRef value will be updated without having to re-render
      console.log(`State: ${count}`);
      console.log(`Ref: ${countRef.current}`);
    }
  };

  const subtractNumber = () => {
    if (count >= 1) {
      setCount(count - 1);
      countRef.current--;

      console.log(`State: ${count}`);
      console.log(`Ref: ${countRef.current}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <TouchableOpacity style={styles.touchableButton} onPress={subtractNumber}>
        <Text style={styles.buttonText}>Sub</Text>
      </TouchableOpacity>
      <Button title="Add" onPress={addNumber} color="yellow" />
      <TextInput
        ref={inputRef}
        keyboardType="default"
        placeholder="type something..."
      />
    </View>
  );
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