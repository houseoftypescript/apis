import { ForexCurrency, ForexRate, Prisma } from '@prisma/client';
import {
  getRates as getFixerRates,
  getSymbols as getFixerSymbols,
} from '../../common/clients/apis/fixer';
import prismaClient from '../../common/clients/prisma';
import logger from '../../common/libs/logger';
import { SyncResponse } from '../../common/models';

export const getRates = async (): Promise<ForexRate[]> => {
  try {
    const [today] = new Date().toISOString().split('T');
    // Connect to PostgreSQL
    await prismaClient.$connect();
    logger.info('PostgreSQL is connected');
    // Fetch Data
    const rates: ForexRate[] = await prismaClient.forexRate.findMany({
      where: { date: today },
    });
    return rates;
  } catch (error) {
    logger.error(`getRates Error: ${error}`);
    return [];
  } finally {
    // Disconnect from Redis
    await prismaClient.$disconnect();
    logger.info('PostgreSQL is disconnected');
  }
};

export const syncRates = async (): Promise<SyncResponse> => {
  try {
    // Connect to PostgreSQL
    await prismaClient.$connect();
    logger.info('PostgreSQL is connected');
    // Get Rates from Fixer API
    const fixerData = await getFixerRates();
    logger.info(`Get Forex Rates from Fixer API ${JSON.stringify(fixerData)}`);
    // Get Currencies from PostgreSQL
    const currencies: ForexCurrency[] =
      await prismaClient.forexCurrency.findMany();
    logger.info(`Get Currencies from PostgreSQL ${JSON.stringify(currencies)}`);
    const availableCodes: string[] = currencies.map(
      (currency) => currency.code
    );
    // Transform Data
    const { rates: fixerRates = {}, date = '' } = fixerData;
    const codes = Object.keys(fixerRates);
    const rates: ForexRate[] = codes
      .filter((code) => availableCodes.includes(code))
      .map((code: string) => {
        const rate: number = fixerRates[code];
        return { code, date, rate };
      });
    logger.info(`Transform Fixer Data to Rates ${JSON.stringify(rates)}`);
    // Sync Data
    const batchPayload: Prisma.BatchPayload =
      await prismaClient.forexRate.createMany({
        data: rates,
        skipDuplicates: true,
      });
    logger.info(
      `Sync Forex Rates to PostgreSQL: ${JSON.stringify(batchPayload)}`
    );
    return { status: 'ok', count: batchPayload.count };
  } catch (error) {
    logger.info(`Sync Forex Rates Error: ${error}`);
    return { status: 'error', count: 0 };
  } finally {
    // Disconnect from PostgreSQL
    await prismaClient.$disconnect();
    logger.info('PostgreSQL is disconnected');
  }
};

export const getCurrencies = async (): Promise<ForexCurrency[]> => {
  try {
    // Connect to PostgreSQL
    await prismaClient.$connect();
    logger.info('PostgreSQL is connected');
    // Fetch Data
    const currencies: ForexCurrency[] =
      await prismaClient.forexCurrency.findMany();
    return currencies;
  } catch (error) {
    logger.error(`getCurrencies Error: ${error}`);
    return [];
  } finally {
    // Disconnect from PostgreSQL
    await prismaClient.$disconnect();
    logger.info('PostgreSQL is disconnected');
  }
};

export const syncCurrencies = async (): Promise<SyncResponse> => {
  try {
    // Connect to PostgreSQL
    await prismaClient.$connect();
    logger.info('PostgreSQL is connected');
    // Get from Fixer API
    const fixerData = await getFixerSymbols();
    logger.info('Get Forex Currencies from Fixer API');
    // Transform Data
    const { symbols = {} } = fixerData;
    const codes = Object.keys(symbols);
    const currencies: ForexCurrency[] = codes.map((code: string) => {
      const currency = symbols[code];
      return { code, currency, favourite: false };
    });
    // Sync Data
    const batchPayload: Prisma.BatchPayload =
      await prismaClient.forexCurrency.createMany({
        data: currencies,
        skipDuplicates: true,
      });
    logger.info(`Sync Forex Currencies to PostgreSQL: ${batchPayload}`);
    return { status: 'ok', count: batchPayload.count };
  } catch (error) {
    logger.info(`Sync Forex Currencies Error: ${error}`);
    return { status: 'error', count: 0 };
  } finally {
    // Disconnect from PostgreSQL
    await prismaClient.$disconnect();
    logger.info('PostgreSQL is disconnected');
  }
};
