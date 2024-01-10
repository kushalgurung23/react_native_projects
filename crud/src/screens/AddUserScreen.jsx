import { StyleSheet, Text, View } from 'react-native';
import { CustomAppbar } from '../components/UI/CustomAppbar';
import CustomButton from '../components/UI/CustomButton';
import CustomTextInput from '../components/UI/CustomTextInput';
import { useCallback, useEffect, useState } from 'react';
import { createUser, searchUser } from '../services/slices/useDetailsSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function AddUserScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // ADD NEW USER
  const [newUser, setNewUser] = useState({});

  const onUserDataChange = (key, value) => {
    setNewUser((prevData) => ({
      ...prevData,
      [key]: value
    }))
  }

  const onAdd = () => {
    dispatch(createUser(newUser))
    setNewUser({})
    navigation.push('ReadUserScreen');
  };

  return (
    <View>
      <CustomAppbar title="Users" />
      <View style={styles.mainContainer}>
        <Text style={{marginVertical: 10}}>Add User</Text>
        <CustomTextInput
        value={newUser && newUser.name}
          onChange={value => onUserDataChange('name', value)}
          placeholder="Name"
        />
        <CustomTextInput
        value={newUser && newUser.email}
          onChange={value => onUserDataChange('email', value)}
          placeholder="Email"
        />
        <CustomTextInput
        value={newUser && newUser.age}
          onChange={value => onUserDataChange('age', value)}
          placeholder="Age"
        />
        <CustomTextInput
        value={newUser && newUser.gender}
          onChange={value => onUserDataChange('gender', value)}
          placeholder="Gender"
        />
        <View style={{height: 10}}></View>
        <CustomButton
          buttonText="Add"
          backgroundColor={'black'}
          textColor={'white'}
          handleButton={onAdd}
        />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10
  }
})

