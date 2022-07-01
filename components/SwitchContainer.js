import React from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'

function SwitchContainer({ value, onValueChange, colorName }) {
  return (
    <View style={styles.switch}>
        <Text>{colorName}</Text>
        <Switch
            value={value}
            onValueChange={onValueChange}
          />
    </View>
  )
}

const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
})

export default SwitchContainer