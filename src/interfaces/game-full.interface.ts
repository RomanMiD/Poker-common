import { Player } from './player.interface';
import { Story } from './story.interface';
import { GameBase } from './game-base.interface';

export interface GameFull extends GameBase {
  players: Player[];
  stories: Story[];
}
