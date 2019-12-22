import _ from 'lodash';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { taskFetch } from '../../store/actions';
import ListItem from './components/ListItem';

const TaskList = props => {
    useEffect(() => {
        props.taskFetch();
    },[])
    const renderRow = (task) => (
        <ListItem task={task.item} />
    )
    return (
        <FlatList 
            enableEmptySections
            data={props.tasks}
            renderItem={renderRow}
            keyExtractor={item => item.uid}
        />
    );
}

const mapStateToProps = state => {
    const tasks = _.map(state.tasks, (val, uid) => {
        return { ...val, uid };
    });
    return { tasks };
};

export default connect(mapStateToProps, { taskFetch })(TaskList);
