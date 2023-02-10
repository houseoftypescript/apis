import environments from '../../../environments';
import { get } from '../../../libs/axios';
import { FixerRatesResponse, FixerSymbolsResponse } from './types';

const FIXER_BASE_URL = 'http://data.fixer.io/api';

export const getRates = async (): Promise<FixerRatesResponse> => {
  const url = `${FIXER_BASE_URL}/latest?access_key=${environments.apiKey.fixer}`;
  const data: FixerRatesResponse = await get<FixerRatesResponse>(url);
  if (!data.success) throw new Error('FIXER API ERROR');
  return data;
};

export const getSymbols = async (): Promise<FixerSymbolsResponse> => {
  const url = `${FIXER_BASE_URL}/symbols?access_key=${environments.apiKey.fixer}`;
  const data: FixerSymbolsResponse = await get<FixerSymbolsResponse>(url);
  if (!data.success) throw new Error('FIXER API ERROR');
  return data;
};
