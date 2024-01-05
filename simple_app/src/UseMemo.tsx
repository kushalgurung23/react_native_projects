import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { initialItems } from './utils/UseMemoUtils'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [items, setItems] = useState(initialItems)

    // Change selectedItem only when there is some change in items or count
    const selectedItem = useMemo(
      () => items.find(item => item.id === count),
      [items, count],
    );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Number of items: {count}</Text>
      <Text style={styles.text}>Selected Items: {selectedItem?.id}</Text>
      <Button
        color={'lightblue'}
        title="Increment"
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );

}

export default UseMemo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center'
    }
})