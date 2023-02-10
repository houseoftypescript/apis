import { TimeZone } from '@prisma/client';
import prismaClient from '../../common/clients/prisma';
import { get, retryGet } from '../../common/libs/axios';
import logger from '../../common/libs/logger';
import { WorldTimeZone } from './time-zones.types';

export const getTimeZones = async (): Promise<TimeZone[]> => {
  try {
    // Connect to PostgreSQL
    await prismaClient.$connect();
    logger.info('PostgreSQL is connected');
    // Fetch Data
    const timeZones: TimeZone[] = await prismaClient.timeZone.findMany({
      orderBy: { timezone: 'asc' },
    });
    return timeZones;
  } catch (error) {
    logger.error(`getTimeZones Error: ${error}`);
    return [];
  } finally {
    // Disconnect from PostgreSQL
    await prismaClient.$disconnect();
    logger.info('PostgreSQL is disconnected');
  }
};

export const getTimeZone = async (timezone: string): Promise<TimeZone> => {
  try {
    // Connect to PostgreSQL
    await prismaClient.$connect();
    logger.info('PostgreSQL is connected');
    // Fetch Data
    const timeZone: TimeZone = await prismaClient.timeZone.findUniqueOrThrow({
      where: { timezone },
    });
    return timeZone;
  } catch (error) {
    logger.error(`getTimeZones Error: ${error}`);
    throw new Error(error as any);
  } finally {
    // Disconnect from PostgreSQL
    await prismaClient.$disconnect();
    logger.info('PostgreSQL is disconnected');
  }
};

export const syncTimeZones = async () => {
  try {
    // Connect to PostgreSQL
    await prismaClient.$connect();
    logger.info('PostgreSQL is connected');
    // Fetch Data
    const listOfTimeZones: string[] = await get<string[]>(
      'https://worldtimeapi.org/api/timezone'
    );
    logger.info(`total ${listOfTimeZones.length}`);
    const timeZones: TimeZone[] = [];
    for (const timeZone of listOfTimeZones) {
      try {
        logger.info(`syncTimeZones: ${timeZone}`);
        const worldTimeZone: WorldTimeZone = await retryGet<WorldTimeZone>(
          `https://worldtimeapi.org/api/timezone/${timeZone}`
        );
        const {
          abbreviation,
          timezone,
          utc_offset: utcOffset,
          raw_offset: rawOffset,
        } = worldTimeZone;
        const upsertedTimeZone: TimeZone = await prismaClient.timeZone.upsert({
          create: { abbreviation, timezone, utcOffset, rawOffset },
          update: { abbreviation, timezone, utcOffset, rawOffset },
          where: { timezone },
        });
        timeZones.push(upsertedTimeZone);
      } catch (error) {
        logger.info(`syncTimeZones ${timeZone} Error: ${error}`);
      }
    }
    return { status: 'ok', count: timeZones.length };
  } catch (error) {
    logger.info(`Sync Time Zones Error: ${error}`);
    return { status: 'error', count: 0 };
  } finally {
    // Disconnect from PostgreSQL
    await prismaClient.$disconnect();
    logger.info('PostgreSQL is disconnected');
  }
};
