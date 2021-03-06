/* Name: Sinai Park(sp46)
CS 262_Homework2
10 / 7 / 2020 */

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';



export default function Home({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://boiling-woodland-20833.herokuapp.com/playergames')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    return (
        <View style={globalStyles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                            <Card>
                                <Text style={globalStyles.titleText}>Email: {item.emailaddress}</Text>
                                <Text style={globalStyles.titleText}>Name: {item.name}</Text>
                                <Text style={globalStyles.titleText}>Game id: {item.gameid}</Text>


                            </Card>
                        </TouchableOpacity>


                    )}
                />
            )}
        </View>

    )
}

