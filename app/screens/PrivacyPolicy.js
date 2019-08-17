import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

export default class PrivacyPolicy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let navigation = this.props.navigation;

        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white'
                }}
            >
                <TouchableOpacity
                    onPress={navigation.openDrawer}
                    style={{
                        marginTop: 60,
                        marginLeft: 30
                    }}
                >
                    <Image
                        style={{
                            width: 30,
                            height: 30
                        }}
                        source={require('../../assets/3_bar.png')}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        marginHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 180
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            lineHeight: 40
                        }}
                    >
                        Our team is ready to help you anytime and anywhere!
                        {''}
                        Customer service: 021-7447-039
                    </Text>
                </View>
            </View>
        );
    }

}