import { ResponseWrapper } from '../response-wrapper.interface';
import { GameListItem } from '../../game-list-item.interface';
import { PaginationWrapper } from '../pagination-wrapper.interface';

export interface GameListResponse extends ResponseWrapper<PaginationWrapper<GameListItem>>{

}
