import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoriteScreen: React.VFC = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Favorite Screen!!</Text>
		</View>
	);
};

export default FavoriteScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
