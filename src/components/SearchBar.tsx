import { searchBarStyles } from "@/styles/searchBar.styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";


interface SearchBarProps {
    onSearch: (cityName: string) => void;
    loading?: boolean;
}
export default function SearchBar({ onSearch, loading = false }: SearchBarProps) {
    const [searchText, setSearchText] = useState("");
    const handleSearch = () => {
        onSearch(searchText)
    }
    return (
        <View style={searchBarStyles.container}>
            <View style={searchBarStyles.inputContainer}>
                <TextInput style={searchBarStyles.input}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Digite uma cidade..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect
                    editable={!loading}
                    returnKeyType="search"
                    onSubmitEditing={handleSearch}
                />

                <TouchableOpacity style={searchBarStyles.button} onPress={handleSearch} disabled={loading}>
                    <Text style={searchBarStyles.buttonText}>{loading ? 'Buscando...' : 'Buscar'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}