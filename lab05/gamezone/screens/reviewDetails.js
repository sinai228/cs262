/* Name: Sinai Park(sp46)
CS 262_Lab05
9 / 30 / 2020 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <Text>{route.params.rating}</Text>
            </Card>
        </View>
    );
}
