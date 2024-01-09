import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { CustomAppbar } from '../components/UI/CustomAppbar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, readUser } from '../services/slices/useDetailsSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/UI/CustomButton'
import CustomModal from '../components/UI/CustomModal'
const ReadUserScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {isLoading, users} = useSelector((state) => state.users)

    const [selectedUser, setSelectedUser] = useState()
    const [isShowModal, setShowModal] = useState(false)

    useEffect(() => {
        dispatch(readUser())
    }, [])
    
  return (
    <View>
      <CustomAppbar
        title={`All Users (${users.length})`}
        hasLeadingAction={true}
        leadingOnPress={() => navigation.pop()}
      />
      <SafeAreaView style={styles.mainContainer}>
        {isLoading ? (
          <Text style={{textAlign: 'center'}}>Loading..</Text>
        ) : (
          <>
            {isShowModal && (
              <CustomModal
                isVisible={isShowModal}
                closeText={'Done'}
                contentText={`Name: ${
                  !selectedUser.name ? '-' : selectedUser.name
                }\nID: ${!selectedUser.id ? '-' : selectedUser.id}\nAge: ${
                  !selectedUser.age ? '-' : selectedUser.age
                }\nGender: ${
                  !selectedUser.gender ? '-' : selectedUser.gender
                }\nEmail: ${!selectedUser.email ? '-' : selectedUser.email}`}
                onRequestClose={() => setShowModal(!isShowModal)}
              />
            )}
            <FlatList
              keyExtractor={user => user.id.toString()}
              data={users}
              renderItem={({item: {id, name, email, gender, age}}) => (
                <View style={styles.userContainer}>
                  <Text style={styles.text}>Name: {!name ? '-' : name}</Text>
                  <Text style={styles.text}>Email: {!email ? '-' : email}</Text>
                  <Text style={styles.text}>
                    Gender: {!gender ? '-' : gender}
                  </Text>
                  <View style={styles.containerBtn}>
                    <CustomButton
                      buttonText="View"
                      backgroundColor="green"
                      textColor="white"
                      handleButton={() => {
                        [
                          setSelectedUser({id, name, email, gender, age}),
                          setShowModal(true),
                        ];
                      }}
                    />
                    <CustomButton
                      buttonText="Edit"
                      backgroundColor="yellow"
                      textColor="black"
                      handleButton={() => {
                        navigation.push('UpdateUserScreen', {id});
                      }}
                    />
                    <CustomButton
                      buttonText="Delete"
                      backgroundColor="red"
                      textColor="white"
                      handleButton={() => dispatch(deleteUser(id.toString()))}
                    />
                  </View>
                </View>
              )}
            />
          </>
        )}
      </SafeAreaView>
    </View>
  );
}

export default ReadUserScreen

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    marginHorizontal: 10,
    height: '100%'
  },
  userContainer: {
    alignSelf: 'stretch',
    padding: 10,
    backgroundColor: 'black',
    opacity: 0.7,
    marginBottom: 10,
    borderRadius: 5,
    flex: 1
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
  },
  containerBtn: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  }
});