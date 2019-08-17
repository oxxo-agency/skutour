import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

export default class HowToRide extends React.Component {

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
                <ScrollView
                    style={{
                        marginHorizontal: 20
                    }}
                >
                    <View
                        style={{
                            marginHorizontal: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 50
                        }}
                    >
                        <View
                            style={{
                                alignItems: "center"
                            }}
                        >
                            <Image
                                style={{
                                    width: 100,
                                    height: 100
                                }}
                                source={require('../../assets/download.png')}
                            />
                            <Text
                                style={{
                                    marginVertical: 18,
                                    textAlign: "center",
                                    fontWeight: "bold"
                                }}
                            >
                                STEP 1
                            </Text>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    marginBottom: 38

                                }}
                            >
                                Download skutour apps on your mobile phone
                            </Text>
                        </View>
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                style={{
                                    width: 100,
                                    height: 100
                                }}
                                source={require('../../assets/avatar.png')}
                            />
                            <Text
                                style={{
                                    marginVertical: 18,
                                    textAlign: "center",
                                    fontWeight: "bold"
                                }}
                            >
                                STEP 2
                            </Text>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    marginBottom: 38

                                }}
                            >
                                Register yourself in our apps for scooter identifications
                            </Text>
                        </View>
                        <View
                            style={{
                                alignItems: "center"
                            }}
                        >
                            <Image
                                style={{
                                    width: 100,
                                    height: 100
                                }}
                                source={require('../../assets/booth.png')}
                            />
                            <Text
                                style={{
                                    marginVertical: 18,
                                    textAlign: "center",
                                    fontWeight: "bold"
                                }}
                            >
                                STEP 3
                            </Text>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    marginBottom: 38

                                }}
                            >
                                Go to Skutour booth and find your scooter, please ask our staff if you need assitance
                            </Text>
                        </View>
                        <View
                            style={{
                                alignItems: "center"
                            }}
                        >
                            <Image
                                style={{
                                    width: 100,
                                    height: 100
                                }}
                                source={require('../../assets/time.png')}
                            />
                            <Text
                                style={{
                                    marginVertical: 18,
                                    textAlign: "center",
                                    fontWeight: "bold"
                                }}
                            >
                                STEP 4
                            </Text>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    marginBottom: 38

                                }}
                            >
                                Scan your scooter and you are ready to go! Skupon will show you how long you will rent the scooter
                            </Text>
                        </View>
                        <View
                            style={{
                                marginTop: 5,
                                alignItems: "center"
                            }}
                        >
                            <Image
                                style={{
                                    width: 120,
                                    height: 200
                                }}
                                source={require('../../assets/scooter.png')}
                            />
                            <Text
                                style={{
                                    marginVertical: 18,
                                    textAlign: "center",
                                    fontWeight: "bold"
                                }}
                            >
                                STEP 5
                            </Text>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    marginBottom: 38

                                }}
                            >
                                Enjoy your ride! be responsible on your ride, and please respect other people that walks
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

}