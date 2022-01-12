import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import MealItems from '../components/MealItems';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen: React.VFC = (props) => {
	const renderMealItem = (itemData) => {
		return (
			<MealItems
				title={itemData.item.title}
				image={itemData.item.imageUrl}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				onSelectMeal={() => {
					props.navigation.navigate({
						routeName: 'MealDetail',
						params: { mealId: itemData.item.id },
					});
				}}
			/>
		);
	};
	const catId = props.navigation.getParam('categoryId');

	const displayedMeal = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);

	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
	return (
		<View style={styles.screen}>
			<FlatList
				data={displayedMeal}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItem}
				style={{ width: '100%' }}
			/>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedCategory.title,
	};
};


export default CategoryMealsScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
