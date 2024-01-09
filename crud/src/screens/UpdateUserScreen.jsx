import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomAppbar } from '../components/UI/CustomAppbar';
import CustomButton from '../components/UI/CustomButton';
import CustomTextInput from '../components/UI/CustomTextInput';
import { updateUser } from '../services/slices/useDetailsSlice';

export default function UpdateUserScreen({route}) {
    
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {id} = route.params
  const [userData, setUserData] = useState({})
  const {users, isLoading} = useSelector((state) => state.users)

  useEffect(() =>  {
    if(!id) {
        return;
    }
  const user = users.find((user) => {
    return user.id === id;
  });
  setUserData(user)
  }, [])

  const onUserDetailsChange = (key, value) => {
    setUserData((previousData) => ({
        ...previousData,
        [key]: value
    }))
    console.log('updated data', userData);
  }

  const onUpdate = () => {
    dispatch(updateUser(userData))
    navigation.pop()
  };

  return (
    <View >
      <CustomAppbar title="Update User" hasLeadingAction={true}
      leadingOnPress={() => {
        navigation.pop();
      }} />
      <View style={styles.mainContainer}>
        <Text style={{marginVertical: 10}}>Update User</Text>
        <CustomTextInput value={ userData && userData.name} onChange={(value) => onUserDetailsChange('name', value)} placeholder="Name" />
        <CustomTextInput value={ userData && userData.email} onChange={(value) => onUserDetailsChange('email', value)} placeholder="Email" />
        <CustomTextInput value={ userData && userData.age} onChange={(value) => onUserDetailsChange('age', value)} placeholder="Age" />
        <CustomTextInput value={ userData && userData.gender} onChange={(value) => onUserDetailsChange('gender', value)} placeholder="Gender" />
        <View style={{height: 10}}></View>
        <CustomButton buttonText="Update" backgroundColor={'black'} textColor={'white'} handleButton={onUpdate} />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10
  }
})

