import { Controller, Get, Route, SuccessResponse, Tags } from 'tsoa';

@Tags('Stock')
@Route('api/stock')
export class StockController extends Controller {
  @Get()
  @SuccessResponse('200', 'Stock')
  public get() {
    return { status: 'stock' };
  }
}
