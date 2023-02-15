import { Controller, Get, Route, SuccessResponse, Tags } from 'tsoa';
import { Country } from '../../common/clients/apis/rest-countries/types';
import { getCountries, getCountryCodes } from './countries.service';
import { CountryCodes } from './countries.types';

@Tags('Countries')
@Route('api/countries')
export class CountriesController extends Controller {
  @Get()
  @SuccessResponse('200', 'Get Countries')
  public async getCountries(): Promise<Country[]> {
    return getCountries();
  }

  @Get('codes')
  @SuccessResponse('200', 'Get Country Codes')
  public async getCountryCodes(): Promise<CountryCodes[]> {
    return getCountryCodes();
  }
}
