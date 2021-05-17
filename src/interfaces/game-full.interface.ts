import { Player } from './player.interface';
import { Story } from './story.interface';
import { GameBase } from './game-base.interface';
import { GameSituation } from './game-situation.interface';

export interface GameFull extends GameBase {
  players: Player[];
  stories: Story[];
  situation: GameSituation | null
}
