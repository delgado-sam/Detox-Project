import React from 'react';  
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';  
import { createSwitchNavigator, createAppContainer } from 'react-navigation';  
  
class LogInScreen extends React.Component {  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
               <Text>Welcome</Text>
              <Text>Username</Text>
              <TextInput style={styles.input} />
              <Text>Password</Text>
              <TextInput style={styles.input} secureTextEntry={true}/>
                <Button  
                    title="Log in"  
                    onPress={() => this.props.navigation.navigate('LogOut')}  
                />  
            </View>  
        );  
    }  
}  
class LogOutScreen extends React.Component {  
  render() {  
    return (  
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
            <Text>Home Screen</Text>  
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
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
