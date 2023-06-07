import React from "react";
import { View, Text, Button } from "react-native"
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAccount } from './../store/UserProfile';

const HomeScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const profile = useAccount();

    console.log("https://jsonplaceholder.typicode.com/users/" + Math.floor(Math.random() * 11));

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>Redux Öğreniyorum - HomeScreen</Text>
            <View style={{ height: 15 }} />
            <Text style={{ color: 'black' }}>Hoş Geldin {profile.name}</Text>
            <Text style={{ color: 'black' }}>{profile.email}</Text>
            <Text style={{ color: 'black' }}>{profile.phone}</Text>
            <View style={{ height: 15 }} />
            <Button title="Bilgileri Getir" onPress={() => profile.getUserInfo()} />
            <View style={{ height: 15 }} />
            <Button title="Open ImagesScreen" onPress={() => navigation.navigate('ImagesScreen')} />
            <View style={{ height: 15 }} />
            <Button title="Open DetailScreen" onPress={() => navigation.navigate('DetailScreen')} />
        </View>
    );
}

export default HomeScreen;