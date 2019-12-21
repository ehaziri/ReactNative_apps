import _ from 'lodash';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from '../common';
import TaskForm from './components/TaskForm';
import { taskUpdate, taskSave, taskDelete } from '../../actions';

const TaskEdit = props => {
    state = { showModal: false }
    useEffect(() => {
        _.each(props.task, (value, prop) => {
            props.taskUpdate({ prop, value });
        });
    }, [])
    const onButtonPress = () => {
        const { name, status, duedate } = props;

        props.taskSave({ name, status, duedate, uid: props.task.uid });
    }
    const onTextPress = () => {
        const { status, duedate } = props;
        
        Communications.text(status, `Your upcoming duedate is on ${duedate}`);
    }

    const onAccept = () => {
        const { uid } = props.task;
        props.taskDelete({ uid });
        setState({ showModal: false });
    }

    const onDecline = () => {
        setState({ showModal: false });
    }

    return (
        <Card>
            <TaskForm />
            <CardSection>
                <Button onPress={onButtonPress.bind(this)}>
                    Save Changes
                </Button>
            </CardSection>

            <CardSection>
                <Button onPress={onTextPress.bind(this)}>
                    Text Schedule
                </Button>
            </CardSection>

            <CardSection>
                <Button onPress={() => setState({ showModal: !state.showModal })}>
                    Delete Task
                </Button>
            </CardSection>

            <Confirm
                visible={state.showModal}
                onAccept={onAccept.bind(this)}
                onDecline={onDecline.bind(this)}
            >
                Are you sure you want to delete this?
            </Confirm>
        </Card>
    );
}
const mapStateToProps = state => {
    const { name, status, duedate } = state.taskForm;
    return { name, status, duedate };
};

export default connect(mapStateToProps, { 
    taskUpdate,
    taskSave,
    taskDelete
})(TaskEdit);
