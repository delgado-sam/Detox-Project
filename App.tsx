import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
class LogInScreen extends React.Component {
    state = { username: "", password: "", error: false};
    render() {
        return (
          <View testID='welcomeScreen' style={{ flex: 1, alignItems: 'center' }}>
            <Text testID='welcome' style={styles.title}>Welcome</Text>
            <Text>Username</Text>
            <TextInput testID='username' style={styles.input} onChangeText={(value) => this.setState({ username: value })} />
            <Text>Password</Text>
            <TextInput testID='password' style={styles.input} secureTextEntry={true} onChangeText={(value) => this.setState({ password: value })} />
            <Button
              testID='logInButton'
              title="Log in"
              onPress={() => {
                if (this.state.username === "AppleJuice" && this.state.password === "123!") {
                  this.setState({ error: false });
                  this.props.navigation.navigate('LogOut');
                } else {
                    this.setState({ error: true });
                //   Alert.alert('Invalid username or password, please try again.');
                }
              } }
              disabled={!this.state.username} />
            { this.state.error && <Text testID='errorMsg' >Invalid username or password, please try again.</Text> }
          </View>
        );
    }
}
class LogOutScreen extends React.Component {
  render() {
    return (
        <View testID='homeScreen' style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text testID='peaceSign' style = {{fontSize: 100, textAlign: "center"}}>✌️</Text>
            <Text testID='hiName' style={styles.homePage}>Welcome AppleJuice</Text>
            <Button
              testID='logOutButton'
                title="Log Out"
                onPress={() => this.props.navigation.navigate('LogIn')}
            />
        </View>
    );
}
}
const AppNavigator = createSwitchNavigator(
    {
      LogIn: LogInScreen,
      LogOut: LogOutScreen
    },
    {
        initialRouteName: "LogIn"
    }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    marginBottom: 20,
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  title: {
   color: 'black',
   marginTop: 20,
   marginBottom: 20,
   fontSize: 40,
  },
  homePage: {
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 40,
   },
});