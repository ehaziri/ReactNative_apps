import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from '../../common';
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux';
import { taskSave } from '../../../store/actions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const ListItem = props => {

    const onRowPress = () => {
        Actions.taskEdit({ task: props.task });
    }
    console.log(props.task.status)
    return (
    <TouchableWithoutFeedback onPress={onRowPress}>
        <View>
            <CardSection style={styles.root}>
            <CheckBox
                title={
                    <Text style={[styles.titleStyle, 
                        {
                            textDecorationLine: props.task.status == 'done' ? "line-through" : "none",
                            textDecorationStyle: "solid",
                            textDecorationColor: "#000"
                        }]}>
                        {props.task.name}
                    </Text>
                }
                checked={props.task.status == 'done' ? true : false}
                checkedColor='green'
                onPress={() => {

                    if(props.task.status == 'done') {
                        
                        props.taskSave({ name: props.task.name, status: 'pending', duedate: props.task.duedate, uid: props.task.uid });
                    }
                    else {

                        props.taskSave({ name: props.task.name, status: 'done', duedate: props.task.duedate, uid: props.task.uid });
                    }
                }}
                containerStyle={{ backgroundColor: '#fff', borderColor: '#fff' }}
                />
                <View style={{ flexDirection: 'row' }} >
                {(props.task.status == 'pending')
                    ?
                    <MCIcon
                        name="dots-horizontal"
                        size={25}
                        style={{ alignSelf: 'center', color: 'blue' }}
                    />
                    :
                    (props.task.status == 'in-progress')
                    ?
                    <MCIcon
                        name="av-timer"
                        size={25}
                        style={{ alignSelf: 'center',  color: 'orange' }}
                    />
                    :
                    <View />
                    }

                    <Icon 
                        name="pen"
                        size={18}
                        style={{ alignSelf: 'center', paddingHorizontal: 20 }}
                    />
                </View>
           




            </CardSection>
        </View>
    </TouchableWithoutFeedback>
    );
    
}

const mapStateToProps = state => {
    const { name, status, duedate } = state.taskForm;
    return { name, status, duedate };
};

export default connect(mapStateToProps, { taskSave })(ListItem);

const styles = {
    root: {
        justifyContent: 'space-between'
    },
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
};
