import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MealDetail = (props) => {
    return (
        <View>
            <Text>{props.steps}</Text>
        </View>
    )
}

export default MealDetail

const styles = StyleSheet.create({})
