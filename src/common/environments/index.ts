import dotenv, { DotenvConfigOutput } from 'dotenv';
import dotenvExpand from 'dotenv-expand';
const output: DotenvConfigOutput = dotenv.config();
dotenvExpand.expand(output);
// API KEY
const API_KEY_AIR_VISUAL: string = process.env.API_KEY_AIR_VISUAL || '';
const API_KEY_FIXER: string = process.env.API_KEY_FIXER || '';
const API_KEY_FOOTBALL_DATA: string = process.env.API_KEY_FOOTBALL_DATA || '';
const API_KEY_NEWS: string = process.env.API_KEY_NEWS || '';
const API_KEY_PROPUBLICA_CONGRESS: string =
  process.env.API_KEY_PROPUBLICA_CONGRESS || '';
const API_KEY_OPEN_WEATHER_MAP: string =
  process.env.API_KEY_OPEN_WEATHER_MAP || '';
const API_KEY_YOUTUBE = process.env.API_KEY_YOUTUBE || '';
// Database
const REDIS_URL: string = process.env.REDIS_URL || '';

const environments = {
  apiKey: {
    airVisual: API_KEY_AIR_VISUAL,
    fixer: API_KEY_FIXER,
    footballData: API_KEY_FOOTBALL_DATA,
    news: API_KEY_NEWS,
    proPublicaCongress: API_KEY_PROPUBLICA_CONGRESS,
    openWeatherMap: API_KEY_OPEN_WEATHER_MAP,
    youTube: API_KEY_YOUTUBE,
  },
  database: { redis: REDIS_URL },
};

export default environments;
