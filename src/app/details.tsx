import WeatherCard from "@/components/WeatherCard";
import { getCurrentWeather } from "@/services/weatherService";
import { detailsStyles } from "@/styles/details.style";
import { WeatherData } from "@/types/weather";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Details() {
    const [loading, setLoading] = useState<boolean>(false)
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
    const [error, setError] = useState<string | null>(null)


    const router = useRouter();
    const { cityName } = useLocalSearchParams<{ cityName: string }>()

    useEffect(() => {
        if (cityName) getWeatherData()
    }, [cityName])

    const getWeatherData = async () => {
        setLoading(true)
        setError(null)

        const result = await getCurrentWeather(cityName as string)

        setLoading(false)

        if (result.success) {
            setWeatherData(result.data)
        } else {
            setError(result.error)
        }
    }

    return (
        <SafeAreaView style={detailsStyles.safeArea}>
            <StatusBar barStyle="dark-content" />
            <ScrollView style={detailsStyles.container}>
                <TouchableOpacity style={detailsStyles.backButton} onPress={() => router.back()}>
                    <Text style={detailsStyles.backButtonText}>
                        ← Voltar
                    </Text>
                </TouchableOpacity>

                <View style={detailsStyles.header}>
                    <Text style={detailsStyles.title}>Clima Atual</Text>
                    <Text style={detailsStyles.subTitle}>Buscando: {cityName}</Text>

                </View>


                {loading && (
                    <View style={detailsStyles.loadingContainer}>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text style={detailsStyles.loadingText}>Carregando...</Text>
                    </View>
                )}

                {!loading && error && (
                    <View style={detailsStyles.errorContainer}>
                        <Text style={detailsStyles.errorText}>{error}</Text>
                        <TouchableOpacity style={detailsStyles.retryButton} onPress={getWeatherData}>
                            <Text style={detailsStyles.retryButtonText}>Tentar novamente</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {!loading && !error && weatherData && (
                    <WeatherCard weather={weatherData} />
                )}
            </ScrollView>

        </SafeAreaView>
    )
}