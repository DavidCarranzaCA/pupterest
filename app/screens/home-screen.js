import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomeScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'Home',
      };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.font}>
                    Hello World
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    },
    font: {
        fontSize: 30
    }
})

export default HomeScreen