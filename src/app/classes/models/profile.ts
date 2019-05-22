import {Card, ICard} from './card';
import {getOrDefault} from '../utils';

export interface IProfile {
  cards: ICard[];
  name: string;
  id: string;
  level: number;
}

export class Profile implements IProfile {
  cards: Card[];
  id: string;
  level: number;
  name: string;

  constructor(profile?: IProfile) {
    this.id = getOrDefault('id', null, profile);
    this.populateCards(profile);
    this.level = getOrDefault('level', 0, profile);
    this.name = getOrDefault('name', '', profile);
  }

  private populateCards(profile?: IProfile) {
    this.cards = getOrDefault('cards', [], profile)
      .map((card) => new Card(card));
    if (this.cards.length === 0) {
      this.cards = Card.starterPack();
    }
  }

}
