import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const allUsers = [
    'kushal',
    'ronaldo',
    'messi',
    'elon'
]

const UseCallBack = () => {
    const [users, setUsers] = useState(allUsers)

    const handleSearch = (text: string) => {
        const filteredUsers  = allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
        setUsers(filteredUsers)
    }
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          paddingHorizontal: 10,
          paddingVertical: 5,
          width: 100,
          borderRadius: 3,
        }}
        onPress={() => setUsers(allUsers)}>
        <Text style={{color: 'white', fontWeight: '700'}}>Shuffle</Text>
      </TouchableOpacity>
      <TextInput placeholder="enter username" onChangeText={handleSearch} />
      {users.map((user, i) => (
        <Text key={i}>{user}</Text>
      ))}
    </SafeAreaView>
  );
}

export default UseCallBack

const styles = StyleSheet.create({})