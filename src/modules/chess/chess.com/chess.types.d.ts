export type Title =
  | 'GM'
  | 'WGM'
  | 'IM'
  | 'WIM'
  | 'FM'
  | 'WFM'
  | 'NM'
  | 'WNM'
  | 'CM'
  | 'WCM';

export type Profile = {
  id: string;
  url: string;
  username: string;
  player_id: number; // the non-changing Chess.com ID of this player
  title: string;
  status: string;
  name: string;
  avatar: string;
  location: string;
  country: string;
  joined: number;
  last_online: number;
  followers: number;
  is_streamer: boolean;
  twitch_url: string;
  fide: number;
};

export type Stats = {
  chess_daily: Stat;
  chess960_daily: Stat;
  chess_blitz: Stat;
  tactics: {
    highest: {
      rating: number;
      date: number;
    };
    lowest: {
      rating: number;
      date: number;
    };
  };
  lessons: {
    highest: {
      rating: number;
      date: number;
    };
    lowest: {
      rating: number;
      date: number;
    };
  };
  puzzle_rush: {
    daily: {
      total_attempts: number;
      score: number;
    };
    best: {
      total_attempts: number;
      score: number;
    };
  };
};

export type Stat = {
  last: {
    // the current stats
    date: number; // timestamp of the last rated game finished
    rating: number; // most-recent rating
    rd: number; // the Glicko "RD" value used to calculate ratings changes
  };
  best: {
    // the best rating achieved by a win
    date: number; // timestamp of the best-win game
    rating: number; // highest rating achieved
    game: string; // URL of the best-win game
  };
  record: {
    // summary of all games played
    win: number; // number of games won
    loss: number; // number of games lost
    draw: number; // number of games drawn
    time_per_move: number; // integer number of seconds per average move
    timeout_percent: number; // timeout percentage in the last 90 days
  };
  tournament: {
    // summary of tournaments participated in
    count: number; // number of tournaments joined
    withdraw: number; // number of tournaments withdrawn from
    points: number; // total number of points earned in tournaments
    highest_finish: number; // best tournament place
  };
};

export type DailyGame = {
  white: string; // URL of the white player's profile
  black: string; // URL of the black player's profile
  url: string; // URL of this game
  fen: string; // current FEN
  pgn: string; // current PGN
  turn: string; // player to move
  move_by: number; // timestamp of when the next move must be made
  // this is "0" if the player-to-move is on vacation
  draw_offer: number; // (optional) player who has made a draw offer
  last_activity: number; // timestamp of the last activity on the game
  start_time: number; // timestamp of the game start (Daily Chess only)
  time_control: string; // PGN-compliant time control
  time_class: string; // time-per-move grouping, used for ratings
  rules: string; // game variant information (e.g., "chess960")
  tournament: string; //URL pointing to tournament (if available),
  match: string; //URL pointing to team match (if available)
};

export type DailyToMoveGame = {
  url: string; // URL of this game
  move_by: number; // timestamp of the when the move must be made by
  // this is "0" if it is not this player's turn
  draw_offer: boolean; // (optional) this player has received a draw offer
  last_activity: number; // timestamp of the last activity on the game
};

export type ArchivedGame = {
  white: {
    // details of the white-piece player:
    username: string; // the username
    rating: number; // the player's rating after the game finished
    result: string; // see "Game results codes" section
    id: string; // URL of this player's profile
  };
  black: {
    // details of the black-piece player:
    username: string; // the username
    rating: number; // the player's rating after the game finished
    result: string; // see "Game results codes" section
    id: string; // URL of this player's profile
  };
  accuracies: {
    // player's accuracies, if they were previously calculated
    white: float;
    black: float;
  };
  url: string; // URL of this game
  fen: string; // final FEN
  pgn: string; // final PGN
  start_time: number; // timestamp of the game start (Daily Chess only)
  end_time: number; // timestamp of the game end
  time_control: string; // PGN-compliant time control
  rules: string; // game variant information (e.g., "chess960")
  eco: string; //URL pointing to ECO opening (if available),
  tournament: string; //URL pointing to tournament (if available),
  match: string; //URL pointing to team match (if available)
};

export type ChessClub = {
  id: string; // URL of Club endpoint
  name: string; // Club's name
  last_activity: number; //timestamp of last activity
  icon: string; // Club's icon url
  url: string; // Club's url
  joined: number; // Timestamp of when player joined the Club
};

export enum ResultCode {
  WIN = 'win', // Win
  WIN = 'checkmated', // Checkmated
  WIN = 'agreed', // Draw agreed
  WIN = 'repetition', // Draw by Repetition
  WIN = 'timeout', // Timeout
  WIN = 'resigned', // Resigned
  WIN = 'stalemate', // Stalemate
  WIN = 'lose', // Lose
  WIN = 'insufficient', // Insufficient Material
  WIN = '50move', // Draw by 50-move Rule
  WIN = 'abandoned', // Abandoned
  WIN = 'kingofthehill', // Opponent King Reached the Hill
  WIN = 'threecheck', // Checked for the 3rd Time
  WIN = 'timevsinsufficient', // Draw by Timeout vs Insufficient Material
  WIN = 'bughousepartnerlose', // Bughouse Partner Lost
}
