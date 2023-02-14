import { Controller, Get, Query, Route, SuccessResponse, Tags } from 'tsoa';
import { getCommittees, getMembers } from './congress.service';
import { Chamber, CongressCommittee, CongressMember } from './congress.types';

@Tags('Congress')
@Route('api/congress')
export class CongressController extends Controller {
  @Get()
  @SuccessResponse('200', 'Get congress')
  public async getCongress(): Promise<{
    congresses: number[];
    chambers: Chamber[];
  }> {
    const congresses = [];
    for (let i = 80; i < 118; i++) {
      congresses.push(i);
    }
    return { chambers: ['house', 'senate'], congresses };
  }

  @Get('members')
  @SuccessResponse('200', 'Get Members')
  public async getMembers(
    @Query('chamber') chamber: Chamber = 'house',
    @Query('congress') congress = 118
  ): Promise<CongressMember[]> {
    return getMembers({ chamber, congress });
  }

  @Get('committees')
  @SuccessResponse('200', 'Get Members')
  public async getCommittees(
    @Query('chamber') chamber: Chamber = 'house',
    @Query('congress') congress = 118
  ): Promise<CongressCommittee[]> {
    return getCommittees({ chamber, congress });
  }
}
