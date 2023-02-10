import { Controller, Get, Route, SuccessResponse, Tags } from 'tsoa';

@Tags('Health')
@Route('api/health')
export class HealthController extends Controller {
  @Get()
  @SuccessResponse('200', "Service's Status")
  public get() {
    return { status: 'healthy' };
  }
}
