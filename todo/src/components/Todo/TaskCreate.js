import React from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from '../common';
import { taskUpdate, taskCreate } from '../../store/actions';
import TaskForm from './components/TaskForm';

const TaskCreate = props => {
    const onButtonPress = () => {
        const { name, status, duedate } = props;
        props.taskCreate({ name, status: status || 'pending', duedate: duedate || 'Monday' });
    }

    return (
        <Card>
            <TaskForm {...props} />
            <CardSection>
                <Button onPress={onButtonPress}>
                    Create
                </Button>
            </CardSection>
        </Card>
    );

}
const mapStateToProps = (state) => {
    const { name, status, duedate } = state.taskForm;
    return { name, status, duedate };
};

export default connect(mapStateToProps, { 
    taskCreate,
    taskUpdate
 })(TaskCreate);

