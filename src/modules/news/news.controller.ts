import { NewsSource } from '@prisma/client';
import { Controller, Get, Query, Route, SuccessResponse, Tags } from 'tsoa';
import { getHeadlines, getNews, getSources } from './news.service';
import {
  Article,
  Language,
  NewsCategory,
  NewsCountryCode,
  SearchIn,
  SortBy,
} from './news.types';

@Tags('News')
@Route('api/news')
export class NewsController extends Controller {
  @Get()
  @SuccessResponse('200', 'Get News')
  public getNews(
    @Query('query') query = '',
    @Query('searchIn') searchIn: SearchIn = '',
    @Query('from') from = '',
    @Query('to') to = '',
    @Query('language') language: Language = 'en',
    @Query('sortBy') sortBy: SortBy = 'publishedAt',
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 100
  ): Promise<Article[]> {
    return getNews({
      query,
      searchIn,
      from,
      to,
      language,
      sortBy,
      page,
      pageSize,
    });
  }

  @Get('/headlines')
  @SuccessResponse('200', 'Get Headlines')
  public getHeadlines(
    @Query('query') query = '',
    @Query('country') country: NewsCountryCode = 'us',
    @Query('category') category: NewsCategory = 'general',
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 100
  ): Promise<Article[]> {
    return getHeadlines({ query, category, country, page, pageSize });
  }

  @Get('/sources')
  @SuccessResponse('200', 'Get Sources')
  public getSources(): Promise<NewsSource[]> {
    return getSources();
  }
}
