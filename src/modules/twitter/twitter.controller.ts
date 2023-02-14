import { Controller, Get, Query, Route, SuccessResponse, Tags } from 'tsoa';
import { getPlaces, getTrends } from './twitter.service';
import { Place, Trend } from './twitter.types';

@Tags('Twitter')
@Route('api/twitter')
export class TwitterController extends Controller {
  @Get('trends')
  @SuccessResponse('200', 'Get Trends')
  public async getTrends(@Query('id') id = 1): Promise<Trend[]> {
    return getTrends(id);
  }

  @Get('places')
  @SuccessResponse('200', 'Get Places')
  public async getPlaces(): Promise<Place[]> {
    return getPlaces();
  }
}
