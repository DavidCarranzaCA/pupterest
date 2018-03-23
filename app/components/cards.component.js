import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements'

class ImgCards extends React.PureComponent {


    render() {
        return (
            <View>
                <Card
                    title="Hello"
                >
                    <Text> Hello World </Text>
                </Card>
            </View>
        );
    }
}

export default ImgCards