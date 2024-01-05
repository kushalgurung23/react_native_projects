import { Button, ButtonProps, StyleSheet, Text, View } from 'react-native'
import React, { useTransition } from 'react'

interface TabButtonProps extends ButtonProps{}

const TabButton = ({onPress, ...rest}: TabButtonProps) => {
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(() => {onPress})
    }

    if(isPending) {
        return <Text>Loading..</Text>
    }
    return <Button {...rest} onPress={handleClick}/>
}

export default TabButton

const styles = StyleSheet.create({})