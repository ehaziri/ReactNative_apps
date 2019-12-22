import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, btnStyle, txtStyle }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity 
            onPress={onPress}
            style={[buttonStyle, btnStyle]}
        >
            <Text style={[textStyle, txtStyle]}>
             {children}
            </Text>
        </TouchableOpacity>
    );
};


const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'green',
        marginLeft: 5,
        marginRight: 5
    }
};

export { Button };
