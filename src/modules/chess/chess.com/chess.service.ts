import { get } from '../../../common/libs/axios';
import {
  ChessClub,
  DailyGame,
  DailyToMoveGame,
  Profile,
  Stats,
  Title,
} from './chess.types';

const BASE_URL = 'https://api.chess.com/pub';

export const getTitledPlayers = async (
  title: Title
): Promise<{ players: string[] }> => {
  const url = `${BASE_URL}/titled/${title}`;
  const response = await get<{ players: string[] }>(url);
  return response;
};

export const getPlayerProfile = async (username: string): Promise<Profile> => {
  const url = `${BASE_URL}/player/${username}`;
  const response = await get<Profile>(url);
  return response;
};

export const getPlayerStats = async (username: string): Promise<Stats> => {
  const url = `${BASE_URL}/player/${username}/stats`;
  const response = await get<Stats>(url);
  return response;
};

export const getPlayerOnlineStatus = async (
  username: string
): Promise<{ online: boolean }> => {
  const url = `${BASE_URL}/player/${username}/is-online`;
  const response = await get<{ online: boolean }>(url);
  return response;
};

export const getPlayerDailyGames = async (
  username: string
): Promise<{ games: DailyGame[] }> => {
  const url = `${BASE_URL}/player/${username}/games`;
  const response = await get<{ games: DailyGame[] }>(url);
  return response;
};

export const getPlayerDailyToMoveGames = async (
  username: string
): Promise<{ games: DailyToMoveGame[] }> => {
  const url = `${BASE_URL}/player/${username}/games/to-move`;
  const response = await get<{ games: DailyToMoveGame[] }>(url);
  return response;
};

export const getPlayerArchivedGames = async (
  username: string
): Promise<{ archives: string[] }> => {
  const url = `${BASE_URL}/player/${username}/games/archives`;
  const response = await get<{ archives: string[] }>(url);
  return response;
};

export const getPlayerGamesByMonth = async (
  username: string,
  year: string,
  month: string
): Promise<{ archives: string[] }> => {
  const url = `${BASE_URL}/player/${username}/games/${year}/${month}`;
  const response = await get<{ archives: string[] }>(url);
  return response;
};

export const getPlayerClubs = async (
  username: string
): Promise<{ clubs: ChessClub[] }> => {
  const url = `${BASE_URL}/player/${username}/clubs`;
  const response = await get<{ clubs: ChessClub[] }>(url);
  return response;
};
