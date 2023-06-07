import React from "react";
import { View, Text, ScrollView, ActivityIndicator, Image, Button } from "react-native"
import { useAccount } from "../store/UserProfile";
import { useImages } from "../store/ImageList";

const ImagesScreen = () => {

    const profile = useAccount();
    const images = useImages();

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ height: 15 }} />
                <Text style={{ color: 'black' }}>Redux Öğreniyorum - ImagesScreen</Text>
                <View style={{ height: 15 }} />
                <Text style={{ color: 'black' }}>Hoş Geldin {profile.name}</Text>
                <Text style={{ color: 'black' }}>{profile.email}</Text>
                <Text style={{ color: 'black' }}>{profile.phone}</Text>
                <View style={{ height: 15 }} />
                <Button title="Resimleri Getir" onPress={() => images.getList()} />
                <View style={{ height: 15 }} />
            </View>

            {
                images.loading ? <ActivityIndicator size={'large'} style={{ alignSelf: 'center' }} />
                    : <>
                        {
                            images.list.map((value) => {
                                return (
                                    <View key={value.id} style={{ marginTop: 15 }}>
                                        <Text style={{ color: 'black' }}>{value.title}</Text>
                                        <Image source={{ uri: value.thumbnailUrl }} style={{ width: 120, height: 120 }} />
                                        <Button title='Delete Image' color={"red"} onPress={async () => images.delete(value.id)} />
                                    </View>
                                )
                            })
                        }
                    </>
            }

        </ScrollView >
    );
}

export default ImagesScreen;