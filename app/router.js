import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import Auth from './screens/Auth';
import SignIn from './screens/SignIn';
import Home from './screens/Home';
import History from './screens/History';
import HowToRide from './screens/HowToRide';
import Help from './screens/Help';
import ScanQR from './screens/ScanQR';
import Setting from './screens/Setting';
import Account from './screens/Account';
import FaQ from './screens/FaQ';
import TermsAndCondition from './screens/TermsAndCondition';
import PrivacyPolicy from './screens/PrivacyPolicy';

// SignedIn Screen
const SignedIn = createDrawerNavigator({
	Home: {
		screen: Home,
	},
	ScanQR: {
		screen: ScanQR,
	},
	History: {
		screen: History
	},
	HowToRide: {
		screen: HowToRide,
	},
	Help: {
		screen: Help,
	},
	Setting: {
		screen: Setting,
	},
	Account: {
		screen: Account,
	},
	FaQ: {
		screen: FaQ,
	},
	TermsAndCondition: {
		screen: TermsAndCondition,
	},
	PrivacyPolicy: {
		screen: PrivacyPolicy,
	}

}, {
		hideStatusBar: true,
		drawerBackgroundColor: '#FDCE3F',
		overlayColor: '#FDCE3F',
		contentOptions: {
			activeTintColor: '#fff',
			activeBackgroundColor: '#FDCE3F',
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