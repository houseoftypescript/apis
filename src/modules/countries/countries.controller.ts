import { Controller, Get, Route, SuccessResponse, Tags } from 'tsoa';
import { Country } from '../../common/clients/apis/rest-countries/types';
import {
  getCountries,
  getCountriesRegions,
  getCountryCodes,
} from './countries.service';
import { CountryCodes, CountryRegions } from './countries.types';

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

  @Get('regions')
  @SuccessResponse('200', 'Get Country Codes')
  public async getCountriesRegions(): Promise<CountryRegions[]> {
    return getCountriesRegions();
  }
}
