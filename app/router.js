import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import Auth from './screens/Auth';
import SignIn from './screens/SignIn';
import Home from './screens/Home';
import History from './screens/History';
import Help from './screens/Help';
import Settings from './screens/Settings';

// SignedIn Screen
const SignedIn = createDrawerNavigator({
	Home: {
		screen: Home,
	},
	History: {
		screen: History
	},
	Help: {
		screen: Help,
	},
	Settings: {
		screen: Settings,
	}
}, {
		hideStatusBar: true,
		drawerBackgroundColor: 'rgba(255,255,255,.9)',
		overlayColor: '#6b52ae',
		contentOptions: {
			activeTintColor: '#fff',
			activeBackgroundColor: '#6b52ae',
		},
	});

export const SignedInContainer = createAppContainer(SignedIn);

// SignedOut Screen
const SignedOut = createStackNavigator({
	SignIn: {
		screen: SignIn
	},
}, {
		headerMode: 'none',
		mode: 'modal',
	});

export const SignedOutContainer = createAppContainer(SignedOut);

// Index Screen
const Index = createSwitchNavigator({
	Auth: {
		screen: Auth
	},
	SignedIn: {
		screen: SignedInContainer
	},
	SignedOut: {
		screen: SignedOutContainer
	}
}, {
		headerMode: 'none',
		mode: 'modal',
		initialRouteName: "Auth"
	});

export const IndexContainer = createAppContainer(Index);

// Root
export const createRootNavigator = (signedIn) => {
	return IndexContainer;
}