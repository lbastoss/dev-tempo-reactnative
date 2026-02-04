import { getCurrentWeather } from "@/services/weatherService";
import { detailsStyles } from "@/styles/details.style";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Details() {
    const router = useRouter();
    const cityName = useLocalSearchParams<{ cityName: string }>()

    useEffect(() => {
        if (cityName) getWeatherData()
    }, [cityName])

    const getWeatherData = async () => {
        const result = await getCurrentWeather(cityName.cityName as string)
        console.log(result)
    }
    return (
        <SafeAreaView style={detailsStyles.safeArea}>
            <StatusBar barStyle="dark-content" />
            <ScrollView style={detailsStyles.container}>
                <TouchableOpacity style={detailsStyles.backButton} onPress={() => router.back()}>
                    <Text style={detailsStyles.backButtonText}>
                        ⬅ Voltar
                    </Text>

                </TouchableOpacity>

                <View style={detailsStyles.header}>
                    <Text style={detailsStyles.title}>Clima Atual</Text>
                    <Text style={detailsStyles.subTitle}>Buscando: {cityName.cityName}</Text>

                </View>

                <View style={detailsStyles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={detailsStyles.loadingText}>Carregando...</Text>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}