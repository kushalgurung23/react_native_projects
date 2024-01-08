import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { CustomAppbar } from '../components/UI/CustomAppbar'
import { useDispatch, useSelector } from 'react-redux'
import { readUser } from '../services/slices/useDetailsSlice'
const ReadUserScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {isLoading, users} = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(readUser())
    }, [])

    
  return (
    <View>
      <CustomAppbar
        title="All Users"
        hasLeadingAction={true}
        leadingOnPress={() => navigation.pop()}
      />
      <View style={styles.mainContainer}>
        {isLoading ? (
          <Text style={{}}>Loading..</Text>
        ) : (
          <FlatList
            keyExtractor={user => user.id.toString()}
            data={users}
            renderItem={({item: {name}}) => (
              <View style={styles.userContainer}>
                <Text style={styles.text}>{!name ? 'no name' : name}</Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

export default ReadUserScreen

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
  },
  userContainer: {
    alignSelf: 'stretch',
    padding: 10,
    backgroundColor: 'black',
    opacity: 0.7,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
  },
});