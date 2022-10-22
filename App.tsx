import React from "react";
import { View, Text, TextInput, StyleSheet, Alert, Button } from "react-native";

export default function App() {
  return (
    <View>
    <Text>Welcome</Text>
    <Text>Username</Text>
    <TextInput style={styles.input} />
    <Text>Password</Text>
    <TextInput style={styles.input} secureTextEntry={true}/>
    <Button
        title="log In"
        onPress={() => Alert.alert('Welcome!')}
      />
  </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
