import { get } from '../../common/libs/axios';
import { CountryRegions } from '../../modules/countries/countries.types';
import { TrendsByCountry } from '../../modules/google/trends/trends.types';
import { BASE_URL } from '../configs';

export const getTrends = async (): Promise<
  { country: string; region: string; subregion: string; trends: string[] }[]
> => {
  const countriesRegions = await get<CountryRegions[]>(
    `${BASE_URL}/countries/regions`
  );
  const googleTrends = await get<{
    trendsByNumber: Record<string, number>;
    trendsByCountries: TrendsByCountry[];
  }>(`${BASE_URL}/google/trends`);
  const { trendsByCountries } = googleTrends;
  const trendsByCountriesAndRegions = trendsByCountries.map(
    ({ country, trends }) => {
      const countryRegion =
        countriesRegions.find(
          (c) =>
            c.name.toLowerCase() === country.toLowerCase() ||
            c.official.toLowerCase() === country.toLowerCase()
        ) || ({} as CountryRegions);
      return {
        country: countryRegion.name || country || '',
        trends,
        region: countryRegion.region || '',
        subregion: countryRegion.subregion || '',
      };
    }
  );
  return trendsByCountriesAndRegions;
};
