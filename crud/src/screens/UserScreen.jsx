import { StyleSheet, Text, View } from 'react-native';
import { CustomAppbar } from '../components/UI/CustomAppbar';
import CustomButton from '../components/UI/CustomButton';
import CustomTextInput from '../components/UI/CustomTextInput';
import { useState } from 'react';
import { createUser } from '../services/slices/useDetailsSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function UserScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState(null);

  const onSearch = (text) => {
    // console.log(`${text}`);
  };

  const onAdd = () => {
    const data = {
      name,
      age,
      gender,
      email
    }
    console.log(data);
    dispatch(createUser(data))
    navigation.push('ReadUserScreen');
  };

  return (
    <View >
      <CustomAppbar title="Users" />
      <View style={styles.mainContainer}>
        <CustomTextInput onChange={onSearch} placeholder="Enter keyword.." />
        <Text style={{marginVertical: 10}}>Add User</Text>
        <CustomTextInput onChange={setName} placeholder="Name" />
        <CustomTextInput onChange={setEmail} placeholder="Email" />
        <CustomTextInput onChange={setAge} placeholder="Age" />
        <CustomTextInput onChange={setGender} placeholder="Gender" />
        <View style={{height: 10}}></View>
        <CustomButton buttonText="Add" handleButton={onAdd} />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10
  }
})

