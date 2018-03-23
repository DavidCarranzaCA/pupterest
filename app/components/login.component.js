import React from 'react';
import { View } from 'react-native';
import { FormInput } from 'react-native-elements';

class LoginForm extends React.PureComponent {
   constructor(props) {
       super(props);
   } 


    render() {
        return (
            <View>
            <FormInput 
            {...this.props} 
            style={{marginBottom: 50, color: '#fff'}}
            />
            </View>
        );
    }
}

export default LoginForm