import { PlayerStatus, Role } from '../enums';

export interface PlayerBase {
  _id?: string;
  userID: string;
  role: Role;
  gameID: string;
  lastOnlineDate: Date | null;
  status: PlayerStatus;
}
