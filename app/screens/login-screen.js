import React from 'react';
import { View, Text , TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Card, Button, Icon, FormLabel } from 'react-native-elements';
import LoginForm from '../components/login.component'


class LoginScreen extends React.PureComponent {
    static navigationOptions = {
        header: null
      };
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                password: ''
        }
    }

    onSubmit = e => {
        this.props.navigation.navigate('HomeScreen')
    }



    render() {
        return (
            <ImageBackground
            style={styles.bgImage}
            blurRadius={1}
            source={require('../../imgs/login.jpg')}
            >
            <View style={styles.container}>
            <Icon 
                name="pets"
                size={40}
                raised
                iconStyle={styles.icon}
            />
                <Card 
                    title="Login"
                    tityleStyle={{fontSize: '300'}}
                    containerStyle={{width: '95%', borderRadius: 10}}
                >

               <FormLabel>E-Mail</FormLabel>
               <LoginForm
               onChangeText={(name) => {this.setState({name})}} 
               value={this.state.name}
               placeholder="E-mail"
               />
               <FormLabel>Password</FormLabel>
               <LoginForm
               onChangeText={(password) => {this.setState({password})}} 
               value={this.state.password}
               secureTextEntry={true}
               placeholder="Password"
               />

                    <TouchableOpacity>
                    <Button
                        title="Login"
                        buttonStyle={styles.button}
                        onPress={e => this.onSubmit(e)}
                    />
                    </TouchableOpacity>
                </Card>
            </View>
            </ImageBackground>
        );
    }
}

const styles= ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Lato'
    },
    title: {
        fontWeight: '700',
        fontSize: 300
    },
    bgImage: {
        flex: 1
    },
    button: {
        borderRadius: 100,
        backgroundColor: '#aa1923',
        height: 50,
        marginTop: 25,
        marginBottom: 25
    },
    icon: {
        color: '#aa1923'
    }
})

export default LoginScreen