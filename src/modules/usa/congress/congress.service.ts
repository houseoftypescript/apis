import environments from '../../../common/environments';
import { get } from '../../../common/libs/axios';
import {
  Chamber,
  CongressCommittee,
  CongressMember,
  CongressResponse,
} from './congress.types';

export const BASE_URL = 'https://api.propublica.org/congress/v1';

export const getMembers = async (
  {
    chamber = 'house',
    congress = 118,
  }: { chamber: Chamber; congress: number } = {
    chamber: 'house',
    congress: 118,
  }
): Promise<CongressMember[]> => {
  const url = `${BASE_URL}/${congress}/${chamber}/members.json`;
  const response: CongressResponse = await get<CongressResponse>(url, {
    headers: { 'X-API-Key': environments.apiKey.proPublicaCongress },
  });
  return response.results[0].members || [];
};

export const getCommittees = async (
  {
    chamber = 'house',
    congress = 118,
  }: { chamber: Chamber; congress: number } = {
    chamber: 'house',
    congress: 118,
  }
): Promise<CongressCommittee[]> => {
  const url = `${BASE_URL}/${congress}/${chamber}/committees.json`;
  const response: CongressResponse = await get<CongressResponse>(url, {
    headers: { 'X-API-Key': environments.apiKey.proPublicaCongress },
  });
  return response.results[0].committees || [];
};

export const getCommittee = async (
  id: string,
  {
    chamber = 'house',
    congress = 118,
  }: { chamber: Chamber; congress: number } = {
    chamber: 'house',
    congress: 118,
  }
): Promise<CongressResponse> => {
  const url = `${BASE_URL}/${congress}/${chamber}/committees/${id}.json`;
  const response: CongressResponse = await get<CongressResponse>(url, {
    headers: { 'X-API-Key': environments.apiKey.proPublicaCongress },
  });
  return response;
};
