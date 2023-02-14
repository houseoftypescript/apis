import { Controller, Get, Query, Route, SuccessResponse, Tags } from 'tsoa';
import { getGoogleTrends, getGoogleTrendsCoutries } from './google.service';
import { TrendsByCountry } from './google.types';

@Tags('Google')
@Route('api/google')
export class GoogleController extends Controller {
  @Get('/trends')
  @SuccessResponse('200', 'Get Google Trends')
  public getGoogleTrends(@Query('country') country = ''): Promise<{
    trendsByNumber: Record<string, number>;
    trendsByCountries: TrendsByCountry[];
  }> {
    return getGoogleTrends(country);
  }

  @Get('/trends/countries')
  @SuccessResponse('200', 'Get Google Trends')
  public getGoogleTrendsCoutries(): Promise<string[]> {
    return getGoogleTrendsCoutries();
  }
}
