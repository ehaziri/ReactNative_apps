import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Confirm } from '../common';
import TaskForm from './components/TaskForm';
import { taskUpdate, taskSave, taskDelete } from '../../store/actions';

const TaskEdit = props => {

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        _.each(props.task, (value, prop) => {
            props.taskUpdate({ prop, value });
        });
    }, [])
    const onButtonPress = () => {
        const { name, status, duedate } = props;

        props.taskSave({ name, status, duedate, uid: props.task.uid });
    }

    const onAccept = () => {
        const { uid } = props.task;
        props.taskDelete({ uid });
        setShowModal(false);
    }

    const onDecline = () => {
        setShowModal(false);
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
                <Button onPress={() => setShowModal(!showModal)} btnStyle={{ borderColor: 'red', borderWidth: 1.5 }} txtStyle={{ color: 'red' }} >
                    Delete Task
                </Button>
            </CardSection>

            <Confirm
                visible={showModal}
                onAccept={onAccept}
                onDecline={onDecline}
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
