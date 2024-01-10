import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState, useCallback } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { CustomAppbar } from '../components/UI/CustomAppbar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, readUser, searchUser } from '../services/slices/useDetailsSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/UI/CustomButton'
import CustomModal from '../components/UI/CustomModal'
import CustomTextInput from '../components/UI/CustomTextInput'
import CustomDropdown from '../components/UI/CustomDropdown'

const ReadUserScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {isLoading, users, searchUserData} = useSelector((state) => state.users)

    const [selectedUser, setSelectedUser] = useState()
    const [isShowModal, setShowModal] = useState(false)

    useEffect(() => {
        dispatch(readUser())
    }, [])

    // SEARCH USER
    const [searchKeyword, setSearchKeyword] = useState('')

    const onUserSearch = useCallback((text) => {
        setSearchKeyword(text)
    }, [])

    useEffect(() => {
        dispatch(searchUser(searchKeyword))
    }, [searchKeyword])

    //   DROPDOWN
    data = [
        {label: 'Default', value: null},
        {label: 'Male', value: 'Male'},
        {label: 'Female', value: 'Female'}
    ]

    const [filterValue, setFilterValue] = useState(null)
    const [isFocus, setIsFocus] = useState(null)
    

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
            <CustomTextInput
              value={searchKeyword}
              onChange={onUserSearch}
              placeholder="Enter keyword.."
            />
            <CustomDropdown 
            data={data}
            value={filterValue}
            setValue={setFilterValue}
            isFocus={isFocus}
            setIsFocus={setIsFocus}
            />
            <View style={{marginVertical: 10}} />
           
            {users && (
              <FlatList
              data={users.filter((user) => {
                if (searchUserData.length === 0) {
                  return user;
                } else {
                  return user.name
                    .toLowerCase()
                    .includes(searchUserData.toLowerCase());
                }
              }).filter((user) => {
                if(!filterValue) {
                    return true;
                }
                else if(filterValue.toLowerCase() === 'male') {
                  return user.gender.toLowerCase() === 'male';
                }
                else {
                    return user.gender.toLowerCase() === 'female'
                }
              }) }
                keyExtractor={user => user.id.toString()}
                renderItem={({item: {id, name, email, gender, age}}) => (
                  <View style={styles.userContainer}>
                    <Text style={styles.text}>Name: {!name ? '-' : name}</Text>
                    <Text style={styles.text}>
                      Email: {!email ? '-' : email}
                    </Text>
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
            )}
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