import { ResponseWrapper } from '../response-wrapper.interface';
import { GameListItem } from '../../game-list-item.interface';

export interface GameListResponse extends ResponseWrapper<GameListItem[]>{

}
