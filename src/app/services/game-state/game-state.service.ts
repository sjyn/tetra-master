import {Injectable} from '@angular/core';
import {ILevel} from '../../classes/models/level';
import {ICard} from '../../classes/models/card';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  public level: ILevel;
  public playerCards: ICard[];

  constructor() {
  }

  public clear() {
    this.level = undefined;
    this.playerCards = undefined;
  }
}
