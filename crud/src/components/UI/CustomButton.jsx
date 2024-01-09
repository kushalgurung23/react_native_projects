import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

export default function CustomButton({handleButton, buttonText, backgroundColor, textColor}) {

  const styles = StyleSheet.create({
    text: {
      textAlign: 'center',
      color: textColor,
      fontWeight: '700',
      fontSize: 20,
    },
    btn: {
      alignSelf: 'stretch',
      backgroundColor: backgroundColor,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
    },
  });

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={handleButton}>
      <Text
        style={styles.text}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}

