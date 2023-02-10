import { TimeZone } from '@prisma/client';
import {
  Controller,
  Get,
  Path,
  Post,
  Route,
  SuccessResponse,
  Tags,
} from 'tsoa';
import { SyncResponse } from '../../common/models';
import { getTimeZone, getTimeZones, syncTimeZones } from './time-zones.service';

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

  @Post('sync')
  @SuccessResponse('200', 'Get TimeZones')
  public async syncTimeZones(): Promise<SyncResponse> {
    return syncTimeZones();
  }
}
