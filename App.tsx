import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from './navigation/MealsNavigator';
import FavoriteScreen from './screens/FavoriteScreen';

enableScreens();

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
	});
};



export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		<AppLoading
			startAsync={fetchFonts}
			onFinish={() => {
				setFontLoaded(true);
			}}
			onError={(err) => console.error(err)}
		/>;
	}

	return (<MealsNavigator />);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
