import { ResponseWrapper } from '../response-wrapper.interface';
import { GameBase } from '../../game-base.interface';

export interface GameListResponse extends ResponseWrapper<GameBase[]>{

}
