import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground
} from 'react-native';

export default class Home extends React.Component {

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
                    backgroundColor: 'white',
                }}
            >
                <ImageBackground source={require('../../assets/women_ride.jpg')}
                    style={{ width: '100%', height: '100%' }}
                >
                    <View
                        style={{
                            marginLeft: 30,
                            marginTop: 60,
                            width: 50
                        }}
                    >
                        <TouchableOpacity
                            onPress={navigation.openDrawer}
                        >
                            <Image
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                                source={require('../../assets/3_bar.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: 420
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ScanQR')}
                            style={{
                                backgroundColor: '#FDCE3F',
                                width: 190,
                                height: 40,
                                textAlign: 'center',
                                borderRadius: 10,
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                SCAN TO RIDE
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }

}