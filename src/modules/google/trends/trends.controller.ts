import { Controller, Get, Query, Route, SuccessResponse, Tags } from 'tsoa';
import { getGoogleTrends, getGoogleTrendsCoutries } from './trends.service';
import { TrendsByCountry } from './trends.types';

@Tags('Google', 'Trends')
@Route('api/google/trends')
export class GoogleController extends Controller {
  @Get()
  @SuccessResponse('200', 'Get Google Trends')
  public getGoogleTrends(@Query('country') country = ''): Promise<{
    trendsByNumber: Record<string, number>;
    trendsByCountries: TrendsByCountry[];
  }> {
    return getGoogleTrends(country);
  }

  @Get('countries')
  @SuccessResponse('200', 'Get Google Trends')
  public getGoogleTrendsCoutries(): Promise<string[]> {
    return getGoogleTrendsCoutries();
  }
}
