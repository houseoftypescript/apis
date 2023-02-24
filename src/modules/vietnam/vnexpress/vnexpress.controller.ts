import { Controller, Get, Route, SuccessResponse, Tags } from 'tsoa';
import { getHome } from './vnexpress.service';
import { VnExpressArticle } from './vnexpress.types';

@Tags('VnExpress')
@Route('api/vietnam/vnexpress')
export class VnExpressController extends Controller {
  @Get()
  @SuccessResponse('200', 'Get Home')
  public async getHome(): Promise<VnExpressArticle[]> {
    return getHome();
  }
}
