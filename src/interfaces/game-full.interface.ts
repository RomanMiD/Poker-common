import { Story } from './story.interface';
import { GameBase } from './game-base.interface';
import { GameSituation } from './game-situation.interface';
import { PlayerFull } from "./player-full.interface";

export interface GameFull extends GameBase {
  players: PlayerFull[];
  stories: Story[];
  situation: GameSituation | null
}
