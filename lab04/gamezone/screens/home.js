/* Name: Sinai Park(sp46)
CS 262_Lab04
9 / 18 / 2020 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', body: 'loren ipsum', rating: 5, key: '1' },
        { title: 'Gotta Catch Them All (again)', body: 'lorem ipsum', rating: 3, key: '2' },
        { title: 'Not So "Final" Fantasy', body: 'lorem ipsum', rating: 2, key: '3' },
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )} />
        </View>

    )
}

