import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeList from './components/EmployeeList';
import EmployeCreate from './components/EmployeeCreate';
import EmployeEdit from './components/EmployeeEdit';

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
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList" 
                        title="Employees" 
                        component={EmployeList} 
                        sceneStyle={{ paddingTop: 64 }} 
                        initial
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeCreate}
                        title="Create Employee"
                        sceneStyle={{ paddingTop: 64 }}
                    />
                    <Scene
                        key="employeeEdit"
                        component={EmployeEdit}
                        title="Edit Employee"
                        sceneStyle={{ paddingTop: 64 }}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
