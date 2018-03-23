import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

class LoginForm extends React.PureComponent {
    


    render() {
        return (
            <View>
            <FormLabel>E-mail Address</FormLabel>
            <FormInput 
            onChangeText={(userName) => this.setState({userName})} 
            style={{marginBottom: 50, color: '#fff'}}
            placeholder="E-mail Address"
            />
            <FormLabel>Password</FormLabel>
            <FormInput 
            onChangeText={(password) => this.setState({password})}
            placeholder="Password"
            />
            </View>
        );
    }
}

export default LoginForm