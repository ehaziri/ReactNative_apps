import React from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { taskUpdate } from '../../../actions';
import { CardSection, Input } from '../../common';

const TaskForm = props => {
    return (
        <View>
            <CardSection>
                <Input 
                    label="Name"
                    placeholder="Jane"
                    value={props.name}
                    onChangeText={
                        text => props.taskUpdate({ prop: 'name', value: text })
                    }
                />
            </CardSection>
            <CardSection>
                <Text style={styles.pickerTextStyle}>Status</Text>
                <Picker
                    style={{ flex: 2 }}
                    selectedValue={props.status}
                    onValueChange={
                        text => props.taskUpdate({ prop: 'status', value: text })
                    }
                >
                    <Picker.Item label="done" value="done" />
                    <Picker.Item label="in-progress" value="in-progress" />
                    <Picker.Item label="pending" value="pending" />                      
                </Picker> 
            </CardSection>
            <CardSection >
                <Text style={styles.pickerTextStyle}>Due Date</Text>
                <Picker
                    style={{ flex: 2 }}
                    selectedValue={props.duedate}
                    onValueChange={
                        day => props.taskUpdate({ prop: 'duedate', value: day })
                    }
                >
                    <Picker.Item label="Monday" value="" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Saturday" value="Saturday" />
                    <Picker.Item label="Sunday" value="Sunday" />                        
                </Picker>        
            </CardSection>
        </View>
    );
}
const mapStateToProps = state => {
    const { name, status, duedate } = state.taskForm;
    return { name, status, duedate };
};

export default connect(mapStateToProps, { taskUpdate })(TaskForm);


const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        alignSelf: 'center'
    }
};
