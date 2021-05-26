import { PlayerBase } from "./player-base.interface";
import { UserBase } from "./user-base.interface";

export interface PlayerFull extends PlayerBase{
  user?: UserBase | null
}
