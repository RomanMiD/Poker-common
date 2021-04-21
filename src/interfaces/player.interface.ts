import { UserBase } from './user-base.interface';
import { CardValue, Role } from '../enums';

export interface Player extends UserBase {
  role: Role;
  gameID: string;
  isOnline: boolean;
  lastOnlineDate: Date;
  voteValue: null | CardValue;
}
