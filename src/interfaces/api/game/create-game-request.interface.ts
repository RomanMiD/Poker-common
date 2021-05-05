import { GameBase } from '../../game-base.interface';
import { Story } from '../../story.interface';

export interface CreateGameRequest extends Omit<GameBase, '_id'> {
 playersEmail: string[];
 stories: Story[]
}
