import { ForexCurrency, ForexRate } from '@prisma/client';
import { Controller, Get, Route, SuccessResponse, Tags } from 'tsoa';
import { getCurrencies, getRates } from './forex.service';

@Tags('Forex')
@Route('api/forex')
export class ForexController extends Controller {
  @Get('/currencies')
  @SuccessResponse('200', 'Get Forex Currencies')
  public async getCurrencies(): Promise<ForexCurrency[]> {
    return getCurrencies();
  }

  @Get('/rates')
  @SuccessResponse('200', 'Get Forex Rates')
  public async getRates(): Promise<ForexRate[]> {
    return getRates();
  }
}
