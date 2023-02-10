import { NewsSource } from '@prisma/client';
import { Controller, Get, Route, SuccessResponse, Tags } from 'tsoa';
import { SyncResponse } from '../../common/models';
import {
  getGoogleTrends,
  getHeadlines,
  getSources,
  syncSources,
} from './news.service';
import { Article, GoogleTrendsByCountry } from './news.types';

@Tags('News')
@Route('api/news')
export class NewsController extends Controller {
  @Get('/headlines')
  @SuccessResponse('200', 'Get Headlines')
  public getHeadlines(): Promise<Article[]> {
    return getHeadlines();
  }

  @Get('/sources')
  @SuccessResponse('200', 'Get Sources')
  public getSources(): Promise<NewsSource[]> {
    return getSources();
  }

  @Get('/sources/sync')
  @SuccessResponse('200', 'Sync Sources')
  public syncSources(): Promise<SyncResponse> {
    return syncSources();
  }

  @Get('/google/trends')
  @SuccessResponse('200', 'Google Trends')
  public getGoogleTrends(): Promise<GoogleTrendsByCountry[]> {
    return getGoogleTrends();
  }
}
