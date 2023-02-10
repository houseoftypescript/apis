import { Controller, Get, Query, Route, SuccessResponse, Tags } from 'tsoa';
import { getAirQuality, getWeather } from './weather.service';

@Tags('Weather')
@Route('api/weather')
export class WeatherController extends Controller {
  @Get()
  @SuccessResponse('200', 'Weather')
  public async getWeather(@Query('query') query = '') {
    return getWeather(query);
  }

  @Get('/air-quality')
  @SuccessResponse('200', 'Air Quality')
  public async getAirQuality(): Promise<void> {
    return getAirQuality();
  }
}
