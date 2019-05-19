import {Card, ICard} from './card';
import {getOrDefault, uuidv4} from '../utils';

export interface IPlayer {
  username: string;
  id: string;
  cards: ICard[];
}

export class Player implements IPlayer {
  cards: ICard[];
  id: string;
  username: string;

  constructor(user?: IPlayer) {
    this.id = getOrDefault('id', uuidv4(), user);
    this.username = getOrDefault('username', '', user);
    this.cards = getOrDefault('cards', [], user).map((card) => new Card(card));
  }

}
