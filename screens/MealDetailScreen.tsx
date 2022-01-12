import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

import { MEALS } from '../data/dummy-data';

const MealDetailScreen: React.VFC = (props) => {
	const mealId = props.navigation.getParam('mealId');

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return (
		<View style={styles.screen}>
			<Text>{selectedMeal.title}</Text>
			<Button
				title='Go to Categories!'
				onPress={() => {
					props.navigation.popToTop();
				}}
			/>
		</View>
	);
};

MealDetailScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam('mealId');

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return {
		headerTitle: selectedMeal.title,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title='Favorite'
					iconName='ios-star'
					onPress={() => {
						alert('add to Favorite');
					}}
				/>
			</HeaderButtons>
		),
	};
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
