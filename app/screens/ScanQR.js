import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

export default class ScanQR extends React.Component {

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
                        marginTop: 90
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "grey",
                            width: 200,
                            height: 200,
                            borderRadius: 10,
                            marginBottom: 20
                        }}
                    >

                    </View>
                    <Text
                        style={{
                            textAlign: 'center',
                            lineHeight: 40
                        }}
                    >
                        Scan the QR code to start the ride
                    </Text>
                </View>
            </View>
        );
    }

}