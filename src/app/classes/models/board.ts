import {Card, ICard} from './card';
import {generateUniqueRandomsInRange} from '../utils';

export interface IBoard {
  board: ICard[][];
}

export class Board implements IBoard {
  board: Card[][];

  constructor(board: Card[][]) {
    this.board = board;
  }

  public static generateBoard(): Board {
    const board = [
      [],
      [],
      [],
      [],
    ] as Card[][];
    const numBlockers = Math.floor(Math.random() * 6) + 1;
    const blockIndicies = generateUniqueRandomsInRange(numBlockers, 16);
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (blockIndicies.indexOf(row * col) !== -1) {
          // add a blocker
          board[row][col] = Card.blockerCard();
        } else {
          // set it to undefined
          board[row][col] = undefined;
        }
      }
    }
    return new Board(board);
  }
}
