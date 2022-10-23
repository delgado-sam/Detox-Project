import React from 'react';  
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';  
import { createSwitchNavigator, createAppContainer } from 'react-navigation';  
  
class LogInScreen extends React.Component {  
    state = { username: "", password: "" };
    render() {  
        return (  
          <View style={{ flex: 1, alignItems: 'center' }}>
             <Text style={styles.title}>Welcome</Text>
            <Text>Username</Text>
            <TextInput style={styles.input} onChangeText={(value) => this.setState({ username: value })} />
            <Text>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true} onChangeText={(value) => this.setState({ password: value })} />
            <Button
              title="Log in"
              onPress={() => {
                if (this.state.username === "AppleJuice" && this.state.password === "123!") {
                  this.props.navigation.navigate('LogOut');
                } else {
                  Alert.alert('Invalid username or password, please try again.');
                }
              } }
              disabled={!this.state.username} />
          </View>
        );  
    }  
}  
class LogOutScreen extends React.Component {  
  render() {  
    return (  
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
            <Text style = {{fontSize: 100, textAlign: "center"}}>
            👋
            </Text>
            <Text style={styles.homePage}>Welcome Apple Juice</Text>  
            <Button  
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
