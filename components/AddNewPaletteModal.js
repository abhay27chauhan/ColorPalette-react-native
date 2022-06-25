import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { COLORS } from "./colors";
import SwitchContainer from "./SwitchContainer";

function AddNewPaletteModal() {
  const [paletteName, setPaletteName] = useState("");
  const [active, setActive] = useState([]);

  function handleActive(colorName) {
    let newActive;
    if(active.includes(colorName)){
      newActive = active.filter(cn => cn !== colorName);
    }else{
      newActive = [...active, colorName];
    }
    setActive(newActive);
  }

  return (
    <View style={styles.container}>
      <Text>Name of your color palette</Text>
      <TextInput
        style={styles.input}
        value={paletteName}
        onChangeText={setPaletteName}
      />
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <SwitchContainer
            colorName={item.colorName}
            value={active.includes(item.colorName)}
            onValueChange={() => handleActive(item.colorName)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },  
  input: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 5,
    marginBottom: 20,
  },
});

export default AddNewPaletteModal;
