import { get } from '../../../common/libs/axios';
import { VnExpressArticle, VnExpressResponse } from './vnexpress.types';

export const getHome = async (): Promise<VnExpressArticle[]> => {
  const url = 'https://vnexpress.net/microservice/home';
  const response = await get<VnExpressResponse>(url);
  const { data } = response;
  const list: VnExpressArticle[] = Object.values(data)
    .map(({ data }) => data)
    .flat(1);
  return list;
};
