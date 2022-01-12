import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import FavoriteScreen from '../screens/FavoriteScreen';

const Tab = createBottomTabNavigator();

function MealsTabNavigator() {
	<Tab.Navigator>
		<Tab.Screen name='Meals' component={MealsNavigator} />
		<Tab.Screen name='Favorites' component={FavoriteScreen} />
	</Tab.Navigator>;
}

// const MealsTabNavigator = createBottomTabNavigator({
// 	Meals: MealsNavigator,
// 	Favorites: FavoriteScreen,
// });

const MealsNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		CategoryMeals: { screen: CategoryMealsScreen },
		MealDetail: MealDetailScreen,
	},
	{
		mode: 'modal',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
			},
			headerTintColor:
				Platform.OS === 'android' ? 'white' : Colors.primaryColor,
			headerTitle: 'A Screen',
		},
	}
);

export default createAppContainer(MealsTabNavigator());
