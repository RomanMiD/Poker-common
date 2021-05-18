import { GameBase } from './game-base.interface';
import { GameStatus } from '../enums';
import { UserBase } from './user-base.interface';

export interface GameListItem extends GameBase{
  status: GameStatus | null;
  creator: UserBase | null;
}
