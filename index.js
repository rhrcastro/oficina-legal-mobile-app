/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './components/activities/Login'
import RegisterUser from './components/activities/RegisterUser'
import RegisterAdress from './components/activities/RegisterAdress'
import RegisterVehicle from './components/activities/RegisterVehicle'
import { StackNavigator } from 'react-navigation'
import {name as appName} from './app.json';
import ForgotPassword from './components/activities/ForgotPassword';
import EditProfile from './components/activities/EditProfile'

const Stack = StackNavigator({
    Login:{
        screen: Login,
        navigationOptions:  {
            headerTintColor: '#eee1d6',
            headerTransparent: 'true'
        }
    },
    RegisterUser:{
        screen: RegisterUser,
        navigationOptions:  {
            headerTintColor: '#eee1d6',
            headerTransparent: 'true'
        }
    },
    RegisterAdress:{
        screen:RegisterAdress,
        navigationOptions:  {
            headerTintColor: '#eee1d6',
            headerTransparent: 'true'
        }
    },
    RegisterVehicle:{
        screen:RegisterVehicle,
        navigationOptions:  {
            headerTintColor: '#eee1d6',
            headerTransparent: 'true'
        }
    },


    ForgotPassword:{
        screen: ForgotPassword,
        navigationOptions:  {
            headerTintColor: '#eee1d6',
            headerTransparent: 'true'
        }
    },

    EditProfile:{
        screen: ForgotPassword,
        navigationOptions:  {
            headerTintColor: '#eee1d6',
            headerTransparent: 'true',
            headerTitle: 'Editar perfil',
        }
    },

})

AppRegistry.registerComponent(appName, () => Stack);
