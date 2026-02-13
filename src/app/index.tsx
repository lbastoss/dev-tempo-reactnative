import SearchBar from "@/components/SearchBar";
import { useLocation } from "@/hooks/useLocation";
import { getCurrentWeatherByCoords } from "@/services/weatherService";
import { homeStyles } from "@/styles/home.styles";
import { useRouter } from "expo-router";
import { ActivityIndicator, Alert, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  const { getCurrentLocation, loading } = useLocation()
  const router = useRouter();

  const handleSearch = (cityName: string) => {
    router.push({
      pathname: '/details',
      params: { cityName }
    })

  }

  const handleLocation = async () => {
    const locationResult = await getCurrentLocation();

    if (!locationResult.success) {
      Alert.alert('Erro', locationResult.error)
    } else {
      const { latitude, longitude } = locationResult.coordinates
      const weatherResult = await getCurrentWeatherByCoords(latitude, longitude)

      if (!weatherResult.success) {
        Alert.alert('Erro', weatherResult.error)

      } else {
        router.push({
          pathname: '/details',
          params: { cityName: weatherResult.data.name }
        })
      }
    }
  }

  return (

    <SafeAreaView style={homeStyles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <ScrollView style={homeStyles.container}>
        <View style={homeStyles.header}>
          <Text style={homeStyles.title}>🌤️ Dev Tempo</Text>
          <Text style={homeStyles.subtitle}>Busque o clima em qualquer cidade do mundo!</Text>
        </View>

        <SearchBar onSearch={handleSearch} />

        <TouchableOpacity style={homeStyles.gpsButton} onPress={handleLocation}>
          {loading ? <ActivityIndicator color={"#fff"} size={"small"} /> : <Text style={homeStyles.gpsButtonText}>Usar minha localização</Text>}

        </TouchableOpacity>

        <View style={homeStyles.emptyContainer}>
          <Text style={homeStyles.emptyText}>🌎 Digite o nome de uma cidade para começar</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
