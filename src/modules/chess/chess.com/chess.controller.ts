import { Controller, Get, Path, Route, SuccessResponse, Tags } from 'tsoa';
import {
  getPlayerArchivedGames,
  getPlayerClubs,
  getPlayerDailyGames,
  getPlayerDailyToMoveGames,
  getPlayerGamesByMonth,
  getPlayerOnlineStatus,
  getPlayerProfile,
  getPlayerStats,
  getTitledPlayers,
} from './chess.service';
import {
  ChessClub,
  DailyGame,
  DailyToMoveGame,
  Profile,
  Stats,
  Title,
} from './chess.types';

@Tags('chess.com')
@Route('api/chess.com')
export class ChessController extends Controller {
  @Get('/titled/:title')
  @SuccessResponse('200', 'Get Titled Players')
  public async getTitledPlayers(
    @Path('title') title: Title
  ): Promise<{ players: string[] }> {
    return getTitledPlayers(title);
  }

  @Get('/player/:username')
  @SuccessResponse('200', 'Get Profile')
  public async getPlayerProfile(
    @Path('username') username: string
  ): Promise<Profile> {
    return getPlayerProfile(username);
  }

  @Get('/player/:username/stats')
  @SuccessResponse('200', 'Get Profile')
  public async getPlayerStats(
    @Path('username') username: string
  ): Promise<Stats> {
    return getPlayerStats(username);
  }

  @Get('/player/:username/is-online')
  @SuccessResponse('200', "Get Players' Online Status")
  public async getPlayerOnlineStatus(
    @Path('username') username: string
  ): Promise<{ online: boolean }> {
    return getPlayerOnlineStatus(username);
  }

  @Get('/player/:username/games')
  @SuccessResponse('200', "Get Players' Daily Games")
  public async getPlayerDailyGames(
    @Path('username') username: string
  ): Promise<{ games: DailyGame[] }> {
    return getPlayerDailyGames(username);
  }

  @Get('/player/:username/games/to-move')
  @SuccessResponse('200', "Get Players' Daily To-Move Games")
  public async getPlayerDailyToMoveGames(
    @Path('username') username: string
  ): Promise<{ games: DailyToMoveGame[] }> {
    return getPlayerDailyToMoveGames(username);
  }

  @Get('/player/:username/games/archives')
  @SuccessResponse('200', "Get Players' Archived Games")
  public async getPlayerArchivedGames(
    @Path('username') username: string
  ): Promise<{ archives: string[] }> {
    return getPlayerArchivedGames(username);
  }

  @Get('/player/:username/games/:year/:month')
  @SuccessResponse('200', "Get Players' Archived Games")
  public async getPlayerGamesByMonth(
    @Path('username') username: string,
    @Path('year') year: string,
    @Path('month') month: string
  ): Promise<{ archives: string[] }> {
    return getPlayerGamesByMonth(username, year, month);
  }

  @Get('/player/:username/clubs')
  @SuccessResponse('200', "Get Players' Clubs")
  public async getPlayerClubs(
    @Path('username') username: string
  ): Promise<{ clubs: ChessClub[] }> {
    return getPlayerClubs(username);
  }
}
