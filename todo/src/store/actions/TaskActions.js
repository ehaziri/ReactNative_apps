import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    TASK_UPDATE,
    TASK_CREATE,
    TASK_FETCH_SUCCESS,
    TASK_SAVE_SUCCESS,
    TASK_INITIAL
} from './types';

export const taskUpdate = ({ prop, value }) => {
    console.log('Actions: Task Update ', prop, value)

    return {
        type: TASK_UPDATE,
        payload: { prop, value }
    };
};

export const taskCreate = ({ name, status, duedate }) => {
    const { currentUser } = firebase.auth();
    console.log('Actions: Task Create ', name, status, duedate)

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
    console.log('Actions: Task Fetch ')

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/tasks`)
            .on('value', snapshot => {
                dispatch({ type: TASK_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const taskSave = ({ name, status, duedate, uid }) => {
    const { currentUser } = firebase.auth();
    console.log('Actions: Task Save ', name, status, duedate, uid)

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
    console.log('Actions: Task Delete ', uid)

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
            .remove()
            .then(() => {
                dispatch({ type: TASK_INITIAL });
                Actions.tasksList({ type: 'reset' });                
            });
    };
};
