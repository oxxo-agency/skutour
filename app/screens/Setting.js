import React from 'react';
import {
    Text,
    View,
    Platform,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';

export default class Setting extends React.Component {

    _SettingProfile() {
        const navigation = this.props.navigation;

        const desc = [
            {
                itemName: 'Sign In',
                btnPage: 'SignIn'
            },
            {
                itemName: 'Account',
                btnPage: 'Account'
            },
            {
                itemName: 'FaQ',
                btnPage: 'FaQ'
            },
            {
                itemName: 'Terms and Condition',
                btnPage: 'TermsAndCondition'
            },
            {
                itemName: 'Privacy Policy',
                btnPage: 'PrivacyPolicy'
            }
        ];

        const item = desc.map(function (name, index) {
            return (
                <TouchableOpacity
                    key={index}
                    style={{
                        flexDirection: 'row',
                        padding: 16,
                        borderBottomWidth: 0.4,
                    }}
                    onPress={() =>
                        navigation.navigate(`${name.btnPage}`)}
                >
                    <Text
                        style={{
                            color: '#333333'
                        }}
                    >
                        {name.itemName}
                    </Text>
                </TouchableOpacity>
            )
        });

        return (item);
    }

    render() {

        const navigation = this.props.navigation;

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
                    }}
                >
                    <View>
                        {this._SettingProfile()}
                    </View>
                </ScrollView>
                <View>
                    <TouchableOpacity
                        style={{
                            borderTopWidth: 0.1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 50,
                            backgroundColor: "#f6b7ac"
                        }}
                    >
                        <Text
                            style={{
                                color: '#5f5c5b',
                                fontSize: 16
                            }}
                        >Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}