import { Controller, Get, Path, Route, SuccessResponse, Tags } from 'tsoa';
import {
  getCompetition,
  getCompetitions,
  getMatchesByTeam,
  getTeam,
  getTeams,
  getTeamsByCompetition,
} from './football.service';

@Tags('Football')
@Route('api/football')
export class FootballController extends Controller {
  @Get('/competitions')
  @SuccessResponse('200', 'Get Competitions')
  public async getCompetitions() {
    return getCompetitions();
  }

  @Get('/competitions/:id')
  @SuccessResponse('200', 'Get Competition by ID')
  public async getCompetition(@Path('id') id: string) {
    return getCompetition(id);
  }

  @Get('/competitions/:id/teams')
  @SuccessResponse('200', 'Get Competition by ID')
  public async getTeamsByCompetition(@Path('id') id: string) {
    return getTeamsByCompetition(id);
  }

  @Get('/teams')
  @SuccessResponse('200', 'Get Teams')
  public async getTeams() {
    return getTeams();
  }

  @Get('/teams/:id')
  @SuccessResponse('200', 'Get Teams')
  public async getTeam(@Path('id') id: string) {
    return getTeam(id);
  }

  @Get('/teams/:id/matches')
  @SuccessResponse('200', 'Get Matches')
  public async getMatchesByTeam(@Path('id') id: string) {
    return getMatchesByTeam(id);
  }
}
