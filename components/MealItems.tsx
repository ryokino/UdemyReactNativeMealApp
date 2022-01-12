import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';

const MealItems = (props) => {
	return (
		<View style={styles.mealItems}>
			<TouchableOpacity onPress={props.onSelectMeal}>
				<View>
					<View style={styles.titleContainer}>
						<Text style={styles.title} numberOfLines={1}>
							{props.title}
						</Text>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							source={{ uri: props.image }}
							style={styles.bgImage}
						/>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<Text>{props.duration}m</Text>
						<Text>{props.complexity.toUpperCase()}</Text>
						<Text>{props.affordability.toUpperCase()}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default MealItems;

const styles = StyleSheet.create({
	mealItems: {
		height: 200,
		width: '100%',
		backgroundColor: '#f5f5f5',
        
	},
	mealRow: {
		flexDirection: 'row',
	},
	mealHeader: {
		height: '85%',
	},
	mealDetail: {
		paddingHorizontal: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
		height: '15%',
		borderRadius: 10,
		overflow: 'hidden',
	},
	bgImage: { width: '100%', height: '100%', justifyContent: 'flex-end' },
	titleContainer: {
		paddingVertical: 5,
		paddingHorizontal: 15,
		backgroundColor: 'rgba(0,0,0,0.7)',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		color: 'white',
		textAlign: 'center',
	},
});
