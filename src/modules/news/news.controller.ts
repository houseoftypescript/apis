import { NewsSource } from '@prisma/client';
import { Controller, Get, Query, Route, SuccessResponse, Tags } from 'tsoa';
import {
  getGoogleTrends,
  getGoogleTrendsCoutries,
  getHeadlines,
  getNews,
  getSources,
} from './news.service';
import {
  Article,
  Category,
  CountryCode,
  GoogleTrendsByCountry,
  Language,
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
    @Query('language') language: Language = '',
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
    @Query('country') country: CountryCode = '',
    @Query('category') category: Category = '',
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

  @Get('/google-trends')
  @SuccessResponse('200', 'Get Google Trends')
  public getGoogleTrends(
    @Query('country') country = ''
  ): Promise<GoogleTrendsByCountry[]> {
    return getGoogleTrends(country);
  }

  @Get('/google-trends/countries')
  @SuccessResponse('200', 'Get Google Trends')
  public getGoogleTrendsCoutries(): Promise<string[]> {
    return getGoogleTrendsCoutries();
  }
}
