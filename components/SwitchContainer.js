import React from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'

function SwitchContainer({ value, onValueChange, colorName }) {
  return (
    <View style={styles.container}>
        <Text>{colorName}</Text>
        <Switch
            value={value}
            onValueChange={onValueChange}
          />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        marginBottom: 5,
        paddingBottom: 5
    }
})

export default SwitchContainer