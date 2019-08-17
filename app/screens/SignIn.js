import React from 'react';
import {
    Text,
    View,
    TextInput
} from 'react-native';

export default class SignIn extends React.Component {

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white'
                }}
            >
                <Text>SIGN IN</Text>
                <View style={styles.textAreaContainer} >
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textAreaContainer: {
        borderColor: COLORS.grey20,
        borderWidth: 1,
        padding: 5
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start"
    }
})