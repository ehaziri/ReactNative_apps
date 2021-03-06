import { 
    TASK_UPDATE,
    TASK_CREATE,
    TASK_SAVE_SUCCESS,
    TASK_INITIAL
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    status: '',
    duedate: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TASK_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case TASK_CREATE:
            return INITIAL_STATE;
        case TASK_SAVE_SUCCESS:
            return INITIAL_STATE;
        case TASK_INITIAL:
            return INITIAL_STATE;
        default:
            return state;
    }
};
