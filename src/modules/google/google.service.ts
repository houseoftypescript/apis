import { get } from '../../common/libs/axios';
import { TrendsByCountry } from './google.types';

export const getGoogleTrends = async (
  country: string
): Promise<{
  trendsByNumber: Record<string, number>;
  trendsByCountries: TrendsByCountry[];
}> => {
  const url =
    'https://trends.google.com/trends/hottrends/visualize/internal/data';
  const data = await get<Record<string, string[]>>(url);
  const keys: string[] = Object.keys(data);
  const trendsByCountries = keys
    .map((key) => {
      const country = key.split('_').join(' ');
      const trends = (data[key] || []).sort();
      return { country, trends };
    })
    .filter(({ country: c }) => (country === '' ? true : c === country))
    .sort((a, b) => (a.country > b.country ? 1 : -1));
  const trendsByNumber = new Map();
  for (const { trends } of trendsByCountries) {
    for (const trend of trends) {
      if (trendsByNumber.has(trend)) {
        const oldValue = trendsByNumber.get(trend);
        trendsByNumber.set(trend, oldValue + 1);
      } else {
        trendsByNumber.set(trend, 1);
      }
    }
  }
  const sortedTrendsByNumber: Record<string, number> = Object.fromEntries(
    new Map([...trendsByNumber.entries()].sort((a, b) => b[1] - a[1]))
  );
  console.log(sortedTrendsByNumber);
  return { trendsByNumber: sortedTrendsByNumber, trendsByCountries };
};

export const getGoogleTrendsCoutries = async (): Promise<string[]> => {
  const url =
    'https://trends.google.com/trends/hottrends/visualize/internal/data';
  const data = await get<Record<string, string[]>>(url);
  const keys: string[] = Object.keys(data);
  return keys.map((key) => key.split('_').join(' ')).sort();
};
