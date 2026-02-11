import SearchBar from "@/components/SearchBar";
import { useLocation } from "@/hooks/useLocation";
import { homeStyles } from "@/styles/home.styles";
import { useRouter } from "expo-router";
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  const { getCurrentLocation } = useLocation()
  const router = useRouter();

  const handleSearch = (cityName: string) => {
    router.push({
      pathname: '/details',
      params: { cityName }
    })

  }

  const handleLocation = async () => {
    const result = await getCurrentLocation()
    console.log(result)

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

        <TouchableOpacity onPress={handleLocation}>
          <Text>Usar minha localização</Text>
        </TouchableOpacity>

        <View style={homeStyles.emptyContainer}>
          <Text style={homeStyles.emptyText}>🌎 Digite o nome de uma cidade para começar</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


