import { PlayerStatus, Role } from '../enums';

export interface Player {
  _id?: string;
  userID: string;
  role: Role;
  gameID: string;
  lastOnlineDate: Date | null;
  status: PlayerStatus;
}
