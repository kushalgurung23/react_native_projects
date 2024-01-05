import React, { useCallback, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Search from './components/Search'

const allUsers = [
    'kushal',
    'ronaldo',
    'messi',
    'elon'
]

/**
 * useCallback hook is primarily concerned with optimizing the performance of your 
 * components by memoizing callback functions. In React, when a component re-renders, 
 * its child components also re-render. If these child components receive callback 
 * functions as props, they might trigger unnecessary re-renders if those callback 
 * functions are recreated in every render cycle.
 */

const UseCallBack = () => {
    const [users, setUsers] = useState(allUsers)

    // IN REACT EVEN IF THE FUNCTION HAS SAME VALUE, IT WILL BE DIFFERENT AFTER EVERY RENDERING BY DEFAULT
    // THEREFORE WE USE CALLBACK TO STOP RE

    const handleSearch = useCallback((text: string) => {
        console.log(users[0]);
        
        const filteredUsers = allUsers.filter(user =>
          user.toLowerCase().includes(text.toLowerCase()),
        );
        setUsers(filteredUsers);
      }, [users, allUsers])

      const shuffleUsers = () => {
        const newUserList = allUsers.reverse()
        setUsers(newUserList)
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
        onPress={shuffleUsers}>
        <Text style={{color: 'white', fontWeight: '700'}}>Shuffle</Text>
      </TouchableOpacity>
      <Search onChange={handleSearch} />
      {users.map((user, i) => (
        <Text key={i}>{user}</Text>
      ))}
    </SafeAreaView>
  );
}

export default UseCallBack

const styles = StyleSheet.create({})