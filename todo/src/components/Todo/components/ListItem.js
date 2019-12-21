import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from '../../common';

const ListItem = props => {
    const onRowPress = () => {
        Actions.taskEdit({ task: props.task });
    }

    return (
        <TouchableWithoutFeedback onPress={onRowPress}>
            <View>
                <CardSection>
                    <Text style={styles.titleStyle}>
                        {props.task.name}
                    </Text>
                </CardSection>
            </View>
        </TouchableWithoutFeedback>
    );
    
}

export default ListItem;

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};
