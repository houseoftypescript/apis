import { TimeZone } from '@prisma/client';
import { Controller, Get, Path, Route, SuccessResponse, Tags } from 'tsoa';
import { getTimeZone, getTimeZones } from './time-zones.service';

@Tags('TimeZones')
@Route('api/time-zones')
export class TimeZonesController extends Controller {
  @Get()
  @SuccessResponse('200', 'Get TimeZones')
  public async getTimeZones(): Promise<TimeZone[]> {
    return getTimeZones();
  }

  @Get(':timeZone')
  @SuccessResponse('200', 'Get TimeZone')
  public async getTimeZone(
    @Path('timeZone') timeZone: string
  ): Promise<TimeZone> {
    return getTimeZone(timeZone);
  }
}
