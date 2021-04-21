import { Story } from './story.interface';

export interface Game {
  _id?: string;
  roomName: string;
  creatorID: string;
  createdDate: Date;
  description: string;
  playersID: string[];
  stories: Story[];
}
