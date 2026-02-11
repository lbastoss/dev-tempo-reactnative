import * as Location from 'expo-location';
import { useState } from 'react';

interface Coordinates {
    latitude: number;
    longitude: number;
}

type LocationResult =
    { sucess: true; coordinates: Coordinates; } |
    { sucess: false; error: string; }

export const useLocation = () => {
    const [loading, setLoading] = useState(false)


    const getCurrentLocation = async (): Promise<LocationResult> => {

        try {

            setLoading(true)

            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                return {
                    sucess: false,
                    error: 'Permissão negada'
                };
            }

            let location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation
            });

            return {
                sucess: true,
                coordinates: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                }
            }

        }
        catch (error) {
            return {
                sucess: false,
                error: 'Erro ao obter localização'
            };
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        getCurrentLocation
    }
}