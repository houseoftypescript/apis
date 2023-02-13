import { Controller, Get, Route, SuccessResponse, Tags } from 'tsoa';
import { getCompanies } from './stock.service';

@Tags('Stock')
@Route('api/stock')
export class StockController extends Controller {
  @Get()
  @SuccessResponse('200', 'Stock')
  public getCompanies() {
    return getCompanies();
  }
}
