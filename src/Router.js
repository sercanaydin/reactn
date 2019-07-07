import React from 'react';

import {
    createAppContainer,
    createStackNavigator
} from "react-navigation";

import Home from './screens/Home';
import Menu from './screens/Menu';
import MenuDetail from './screens/Menu/MenuDetail';

const AppStack = createStackNavigator({
        Home: Home,
        Menu: {
            screen: Menu,
            navigationOptions: {
                title: 'Menü'
            }
        },
        MenuDetail: {
            screen: MenuDetail,
            navigationOptions: {
                title: 'Menü detayı'
            }
        },
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppStack);