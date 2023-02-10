import dotenv, { DotenvConfigOutput } from 'dotenv';
import dotenvExpand from 'dotenv-expand';
const output: DotenvConfigOutput = dotenv.config();
dotenvExpand.expand(output);

const API_KEY_AIR_VISUAL: string = process.env.API_KEY_AIR_VISUAL || '';
const API_KEY_FIXER: string = process.env.API_KEY_FIXER || '';
const API_KEY_NEWS: string = process.env.API_KEY_NEWS || '';
const API_KEY_OPEN_WEATHER_MAP: string =
  process.env.API_KEY_OPEN_WEATHER_MAP || '';
const REDIS_URL: string = process.env.REDIS_URL || '';

const environments = {
  apiKey: {
    airVisual: API_KEY_AIR_VISUAL,
    fixer: API_KEY_FIXER,
    news: API_KEY_NEWS,
    openWeatherMap: API_KEY_OPEN_WEATHER_MAP,
  },
  database: { redis: REDIS_URL },
};

export default environments;
