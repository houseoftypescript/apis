export type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

export type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type WeatherResponse = {
  coord: { lon: number; lat: number };
  weather: [{ id: number; main: string; description: string; icon: string }];
  base: string;
  main: Main;
  visibility: number;
  wind: { speed: number; deg: number; gust: number };
  rain: { '1h': number };
  clouds: { all: number };
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type Lang =
  | 'af'
  | 'al'
  | 'ar'
  | 'az'
  | 'bg'
  | 'ca'
  | 'cz'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'es'
  | 'fa'
  | 'fi'
  | 'fr'
  | 'gl'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'kr'
  | 'la'
  | 'lt'
  | 'mk'
  | 'no'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'pt_br'
  | 'ro'
  | 'ru'
  | 'se'
  | 'sk'
  | 'sl'
  | 'sp'
  | 'sr'
  | 'sv'
  | 'th'
  | 'tr'
  | 'ua'
  | 'uk'
  | 'vi'
  | 'zh_cn'
  | 'zh_tw'
  | 'zu';
