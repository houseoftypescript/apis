import {
  Controller,
  Get,
  Path,
  Query,
  Route,
  SuccessResponse,
  Tags,
} from 'tsoa';
import { getCommittee, getCommittees, getMembers } from './congress.service';
import {
  Chamber,
  CongressCommittee,
  CongressMember,
  CongressResponse,
} from './congress.types';

@Tags('Congress')
@Route('api/usa/congress')
export class CongressController extends Controller {
  @Get()
  @SuccessResponse('200', 'Get Congress')
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
  @SuccessResponse('200', 'Get Committees')
  public async getCommittees(
    @Query('chamber') chamber: Chamber = 'house',
    @Query('congress') congress = 118
  ): Promise<CongressCommittee[]> {
    return getCommittees({ chamber, congress });
  }

  @Get('committees/:id')
  @SuccessResponse('200', 'Get Committee')
  public async getCommittee(
    @Path('id') id: string,
    @Query('chamber') chamber: Chamber = 'house',
    @Query('congress') congress = 118
  ): Promise<CongressResponse> {
    return getCommittee(id, { chamber, congress });
  }
}
