import React from 'react';
import { View, Text ,TouchableOpacity, StyleSheet, ImageBackground, Icon} from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient'
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';

class Login extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: ''
        }
    }

    onSubmit = e => {
        console.log(this.state)
    }

    render() {
        return (
            <ImageBackground
            style={styles.bgImage}
            blurRadius={1}
            source={require('../../../imgs/login.jpg')}
            >
            <View style={styles.container}>
                <Card 
                title="Login"
                tityleStyle={{fontSize: '300'}}
                containerStyle={{width: '95%', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 10}}
                >
               
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
    }
})

export default Login