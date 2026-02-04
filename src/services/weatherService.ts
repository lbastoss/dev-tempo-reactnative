import { WeatherData } from "@/types/weather";
import axios from 'axios';



export type WeatherResult =
    { success: true; data: WeatherData } | { success: false; error: string }



const API_KEY = process.env.EXPO_PUBLIC_OPENWERATHER_API_KEY
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        appid: API_KEY,
        lang: 'pt_br',
        units: 'metric'
    },
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
})

export const getCurrentWeather = async (cityName: string): Promise<WeatherResult> => {
    try {
        const trimmedCity = cityName.trim();
        if (!trimmedCity) {
            return {
                success: false,
                error: 'Nome da cidade não pode ser vazio.'
            }
        }


        const response = await api.get<WeatherData>('/weather', {
            params: {
                q: trimmedCity
            }
        })
        return {
            success: true,
            data: response.data
        }
    } catch (err) {
        return {

            success: false,
            error: 'Erro ao buscar dados do clima. Verifique o nome da cidade e tente novamente.'
        }

    }
}

