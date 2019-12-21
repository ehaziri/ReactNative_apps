import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import { Card, CardSection, Input, Button, Spinner } from '../common';

const LoginForm = props => {
    const onEmailChange = (text) => {
        props.emailChanged(text);
    }

    const onPasswordChange = (text) => {
        props.passwordChanged(text);
    } 
    const onButtonPress = () => {
        const { email, password } = props;
        props.loginUser({ email, password });
    }
    const renderError = () => {
        if (props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {props.error}
                    </Text>
                </View>
            );
        }
    }
    const renderButton = () => {
        if (props.loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={onButtonPress}>
                Login
            </Button>
        );
    }

        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@mail.com"
                        onChangeText={onEmailChange}
                        value={props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Password"
                        placeholder="******"
                        onChangeText={onPasswordChange}
                        value={props.password}                        
                        secureTextEntry
                    />
                </CardSection>
                {renderError()}
                <CardSection>
                    {renderButton()}
                </CardSection>
            </Card>
        );
}
const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};

export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser 
})(LoginForm);

const styles = {
    errorTextStyle: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 20
    }
};
