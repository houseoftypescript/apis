import { ForexCurrency, ForexRate } from '@prisma/client';
import { Controller, Get, Post, Route, SuccessResponse, Tags } from 'tsoa';
import { SyncResponse } from '../../common/models';
import {
  getCurrencies,
  getRates,
  syncCurrencies,
  syncRates,
} from './forex.service';

@Tags('Forex')
@Route('api/forex')
export class ForexController extends Controller {
  @Get('/currencies')
  @SuccessResponse('200', 'Get Forex Currencies')
  public async getCurrencies(): Promise<ForexCurrency[]> {
    return getCurrencies();
  }

  @Post('/currencies/sync')
  @SuccessResponse('200', 'Sync Forex Currencies')
  public async syncCurrencies(): Promise<SyncResponse> {
    return syncCurrencies();
  }

  @Get('/rates')
  @SuccessResponse('200', 'Get Forex Rates')
  public async getRates(): Promise<ForexRate[]> {
    return getRates();
  }

  @Post('/rates/sync')
  @SuccessResponse('200', 'Sync Forex Rates')
  public async syncRates(): Promise<SyncResponse> {
    return syncRates();
  }
}
