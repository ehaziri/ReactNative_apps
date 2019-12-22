import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    TASK_UPDATE,
    TASK_CREATE,
    TASK_FETCH_SUCCESS,
    TASK_SAVE_SUCCESS
} from './types';

export const taskUpdate = ({ prop, value }) => {
    console.log('action task update ', prop, value)
    return {
        type: TASK_UPDATE,
        payload: { prop, value }
    };
};

export const taskCreate = ({ name, status, duedate }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/tasks`)
            .push({ name, status, duedate })
            .then(() => {
                dispatch({ type: TASK_CREATE });
                Actions.tasksList({ type: 'reset' });
            });
    };   
};

export const taskFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/tasks`)
            .on('value', snapshot => {
                dispatch({ type: TASK_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const taskSave = ({ name, status, duedate, uid }) => {
    const { currentUser } = firebase.auth();
    console.log('nnna ', name)
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
            .set({ name, status, duedate })
            .then(() => {
                dispatch({ type: TASK_SAVE_SUCCESS });
                Actions.tasksList({ type: 'reset' });
            });
    };
};

export const taskDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
            .remove()
            .then(() => {
                Actions.tasksList({ type: 'reset' });                
            });
    };
};
