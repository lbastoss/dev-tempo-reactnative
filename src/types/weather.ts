/**
 * Informações principais do clima
 */
export interface Main {
  temp: number; // Temperatura atual em Celsius
  feels_like: number; // Sensação térmica
  temp_min: number; // Temperatura mínima
  temp_max: number; // Temperatura máxima
  humidity: number; // Umidade do ar em %
  pressure: number; // Pressão atmosférica em hPa
}

/**
 * Descrição das condições climáticas
 */
export interface Weather {
  id: number; // ID da condição
  main: string; // Tipo (Rain, Snow, Clear, etc)
  description: string; // Descrição detalhada
  icon: string; // Código do ícone (ex: "01d")
}

/**
 * Informações sobre o vento
 */
export interface Wind {
  speed: number; // Velocidade em m/s
  deg: number; // Direção em graus
}

/**
 * Resposta completa da API do OpenWeather
 * Endpoint: /data/2.5/weather
 */
export interface WeatherData {
  name: string; // Nome da cidade
  main: Main; // Dados principais (temp, umidade, etc)
  weather: Weather[]; // Array de condições (geralmente 1 item)
  wind: Wind; // Informações do vento
  dt: number; // Timestamp dos dados
  sys: {
    country: string; // Código do país (ex: "BR", "US")
  };
  cod: number; // Código de resposta HTTP
}

/**
 * Tipo para erro da API
 */
export interface WeatherError {
  cod: string | number;
  message: string;
}
