import redisClient from '../../common/clients/redis';
import environments from '../../common/environments';
import { get } from '../../common/libs/axios';
import logger from '../../common/libs/logger';
import { Competition, Match, Team } from './football.types';

const BASE_URL = 'https://api.football-data.org/v4';

const headers = { 'X-Auth-Token': environments.apiKey.footballData };

export const getCompetitions = async (): Promise<Competition[]> => {
  try {
    // Connect to Redis
    const key = 'competitions';
    logger.info(`getCompetitions key ${key}`);
    await redisClient.connect();
    // Fetch Data from Cache
    const cacheCompetitions = await redisClient.get<Competition[]>(key);
    if (cacheCompetitions !== null) {
      return cacheCompetitions;
    }
    // Fetch Data from API
    const url = `${BASE_URL}/competitions`;
    const { competitions } = await get<{
      count: number;
      competitions: Competition[];
    }>(url, { headers });
    // Set Data to Cache
    await redisClient.set<Competition[]>(key, competitions, { EX: 60 * 60 });
    return competitions;
  } catch (error) {
    logger.error(`getCompetitions Error: ${error}`);
    throw new Error('getCompetitions Error');
  } finally {
    await redisClient.disconnect();
  }
};

export const getCompetition = async (id: string): Promise<Competition> => {
  try {
    // Connect to Redis
    const key = `competitions-${id}`;
    logger.info(`getCompetition key ${key}`);
    await redisClient.connect();
    // Fetch Data from Cache
    const cacheCompetition = await redisClient.get<Competition>(key);
    if (cacheCompetition !== null) {
      return cacheCompetition;
    }
    // Fetch Data from API
    const url = `${BASE_URL}/competitions/${id}`;
    const competition = await get<Competition>(url, { headers });
    // Set Data to Cache
    await redisClient.set<Competition>(key, competition, { EX: 60 * 60 });
    return competition;
  } catch (error) {
    logger.error(`getCompetition Error: ${error}`);
    throw new Error('getCompetition Error');
  } finally {
    await redisClient.disconnect();
  }
};

export const getTeamsByCompetition = async (id: string): Promise<Team[]> => {
  const url = `${BASE_URL}/competitions/${id}/teams`;
  const { teams = [] } = await get<{ count: number; teams: Team[] }>(url, {
    headers,
  });
  return teams;
};

export const getTeams = async (
  { limit = 0, offset = 50 }: { limit: number; offset: number } = {
    limit: 0,
    offset: 50,
  }
): Promise<Team[]> => {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set('limit', limit.toString());
  urlSearchParams.set('offset', offset.toString());
  const url = `${BASE_URL}/teams?${urlSearchParams.toString()}`;
  const { teams = [] } = await get<{ count: number; teams: Team[] }>(url, {
    headers,
  });
  return teams;
};

export const getTeam = async (id: string): Promise<Team> => {
  const url = `${BASE_URL}/teams/${id}`;
  return get<Team>(url, { headers });
};

export const getMatchesByTeam = async (id: string): Promise<Match[]> => {
  try {
    // Connect to Redis
    const key = `competitions-${id}`;
    logger.info(`getCompetition key ${key}`);
    await redisClient.connect();
    // Fetch Data from Cache
    const cacheMatches = await redisClient.get<Match[]>(key);
    if (cacheMatches !== null) {
      return cacheMatches;
    }
    // Fetch Data from API
    const url = `${BASE_URL}/teams/${id}/matches`;
    const { matches } = await get<{ count: number; matches: Match[] }>(url, {
      headers,
    });
    // Set Data to Cache
    await redisClient.set<Match[]>(key, matches, { EX: 60 * 60 });
    return matches;
  } catch (error) {
    logger.error(`getCompetition Error: ${error}`);
    throw new Error('getCompetition Error');
  } finally {
    await redisClient.disconnect();
  }
};
