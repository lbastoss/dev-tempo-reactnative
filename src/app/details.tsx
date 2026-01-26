import { detailsStyles } from "@/styles/details.style";
import { ActivityIndicator, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Details() {


    return (
        <SafeAreaView style={detailsStyles.safeArea}>
            <StatusBar barStyle="dark-content" />
            <ScrollView style={detailsStyles.container}>
                <TouchableOpacity style={detailsStyles.backButton}>
                    <Text style={detailsStyles.backButtonText}>
                        ⬅ Voltar
                    </Text>

                </TouchableOpacity>

                <View style={detailsStyles.header}>
                    <Text style={detailsStyles.title}>Clima Atual</Text>
                    <Text style={detailsStyles.subTitle}>Buscando: nome da cidade</Text>

                </View>

                <View style={detailsStyles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={detailsStyles.loadingText}>Carregando...</Text>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}