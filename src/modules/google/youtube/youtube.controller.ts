import { Controller, Get, Query, Route, SuccessResponse, Tags } from 'tsoa';
import { getCategories, getTrending } from './youtube.service';
import { YouTubeCategory, YouTubeVideo } from './youtube.types';

@Tags('Google', 'YouTube')
@Route('api/google/youtube')
export class YouTubeController extends Controller {
  @Get('trending')
  @SuccessResponse('200', 'Get Trending')
  public async getTrending(
    @Query('regionCode') regionCode = 'us',
    @Query('videoCategoryId') videoCategoryId = 0
  ): Promise<YouTubeVideo[]> {
    return getTrending({ regionCode, videoCategoryId });
  }

  @Get('categories')
  @SuccessResponse('200', 'Get Categories')
  public async getCategories(
    @Query('regionCode') regionCode = 'us'
  ): Promise<YouTubeCategory[]> {
    return getCategories(regionCode);
  }
}
