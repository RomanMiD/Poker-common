import { CardValue, GameStatus } from '../enums';

export interface GameSituation {
  gameID: string,
  status: GameStatus,
  storiesResult?: StoryResult[] | null,
  currentStoryID?: string | null
}

export interface StoryResult {
  voteStartDate: Date;
  voteEndDate: Date;
  votes: Vote[]
}

export interface Vote {
  playerID: string,
  voteDate: Date,
  nominal: CardValue
}
