import { Controller, Get, Route, SuccessResponse, Tags } from 'tsoa';
import { Country } from '../../common/clients/apis/rest-countries/types';
import { getCountries } from './countries.service';

@Tags('Countries')
@Route('api/countries')
export class CountriesController extends Controller {
  @Get()
  @SuccessResponse('200', 'Get Countries')
  public async getCountries(): Promise<Country[]> {
    return getCountries();
  }
}
