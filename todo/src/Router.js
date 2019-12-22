import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { LoginForm } from './components/Login';
import TasksList from './components/Todo/TasksList';
import TaskCreate from './components/Todo/TaskCreate';
import TaskEdit from './components/Todo/TaskEdit';
import Icon from 'react-native-vector-icons/AntDesign';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene 
                        key="login" 
                        title="Please Login" 
                        component={LoginForm} 
                        sceneStyle={{ paddingTop: 64 }}
                    />
                </Scene>
                <Scene key="main">
                    <Scene 
                        rightTitle={                
                        <Icon 
                            name="plussquare"
                            color="green"
                            size={25}
                        />}
                        onRight={() => Actions.taskCreate()}
                        key="tasksList" 
                        title="Tasks" 
                        component={TasksList} 
                        sceneStyle={{ paddingTop: 64 }} 
                        initial
                    />
                    <Scene
                        key="taskCreate"
                        component={TaskCreate}
                        title="Create Task"
                        sceneStyle={{ paddingTop: 64 }}
                    />
                    <Scene
                        key="taskEdit"
                        component={TaskEdit}
                        title="Edit Task"
                        sceneStyle={{ paddingTop: 64 }}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
