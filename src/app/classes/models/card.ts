import {getRandom, uuidv4} from '../utils';

export enum CardArrow {
  ArrowBottom = 'Arrow_Bottom',
  ArrowBottomLeft = 'Arrow_Bottom_Left',
  ArrowBottomRight = 'Arrow_Bottom_Right',
  ArrowLeft = 'Arrow_Left',
  ArrowRight = 'Arrow_Right',
  ArrowTop = 'Arrow_Top',
  ArrowTopLeft = 'Arrow_Top_Left',
  ArrowTopRight = 'Arrow_Top_Right',
}

export const BLOCKER_ID = 'blocker';

export interface ICard {
  id: string;
  cardImage: string;
  cardColor: CardColor;
  arrows: Set<CardArrow>;
  power: number;
  battleClass: CardBattleClass;
  physicalDefence: number;
  magicalDefence: number;
}

export type CardColor = 'red' | 'blue';
export type CardBattleClass = 'P' | 'M' | 'X' | 'A';

export class Card implements ICard {
  arrows: Set<CardArrow>;
  cardColor: 'red' | 'blue';
  cardImage: string;
  id: string;
  battleClass: CardBattleClass;
  magicalDefence: number;
  physicalDefence: number;
  power: number;

  public get isBlocker(): boolean {
    return this.id === BLOCKER_ID;
  }

  public get statsString(): string {
    const stats = this.power.toString(16) +
      this.battleClass +
      this.physicalDefence.toString(16) +
      this.magicalDefence.toString(16);
    return stats.toUpperCase();
  }

  constructor(card?: ICard) {
    this.id = !!card ? card.id : undefined;
    this.cardColor = !!card ? card.cardColor : 'red';
    this.cardImage = !!card ? card.cardImage : '';
    this.arrows = !!card ? card.arrows : new Set();
    this.power = !!card ? card.power : 0;
    this.battleClass = !!card ? card.battleClass : 'P';
    this.physicalDefence = !!card ? card.physicalDefence : 0;
    this.magicalDefence = !!card ? card.magicalDefence : 0;
  }

  public static blockerCard(): Card {
    return new Card({
      arrows: new Set<CardArrow>(),
      battleClass: undefined,
      cardColor: undefined,
      cardImage: 'blocked',
      id: BLOCKER_ID,
      magicalDefence: 0,
      physicalDefence: 0,
      power: 0,
    });
  }

  public static generateRandomCard(color: CardColor): Card {
    const genArrows = (): Set<CardArrow> => {
      const allKeys = Object.keys(CardArrow);
      const outCount = Math.floor(Math.random() * allKeys.length);
      const arrows = getRandom(allKeys, outCount);
      return new Set(arrows.map((key) => CardArrow[key]));
    };

    const genCardImage = (): string => {
      const randomImage = Math.floor(Math.random() * 100) + 1;
      if (randomImage < 10) {
        return `00${randomImage}`;
      } else if (randomImage < 100) {
        return `0${randomImage}`;
      } else {
        return `${randomImage}`;
      }
    };

    const genBattleClass = (): CardBattleClass => {
      const val = Math.floor(Math.random() * 4);
      if (val === 0) {
        return 'P';
      } else if (val === 1) {
        return 'M';
      } else if (val === 3) {
        return 'X';
      } else {
        return 'A';
      }
    };

    return new Card({
      cardColor: color,
      id: uuidv4(),
      cardImage: genCardImage(),
      arrows: genArrows(),
      power: Math.floor(Math.random() * 15),
      battleClass: genBattleClass(),
      physicalDefence: Math.floor(Math.random() * 15),
      magicalDefence: Math.floor(Math.random() * 15),
    });
  }

  public static starterPack(): Card[] {
    const battleClasses = ['P', 'M', 'X', 'A'];
    const cardImages = ['001', '002', '003', '004'];
    const cards = [];
    cardImages.forEach((image) => {
      battleClasses.forEach((bc) => {
        const card = new Card({
          arrows: Card.genArrows(),
          battleClass: bc as CardBattleClass,
          cardColor: 'red',
          cardImage: image,
          id: uuidv4(),
          physicalDefence: Math.floor(Math.random() * 15),
          magicalDefence: Math.floor(Math.random() * 15),
          power: Math.floor(Math.random() * 15),
        });
        cards.push(card);
      });
    });
    return cards;
  }

  private static genArrows(): Set<CardArrow> {
    const allKeys = Object.keys(CardArrow);
    const outCount = Math.floor(Math.random() * allKeys.length);
    const arrows = getRandom(allKeys, outCount);
    return new Set(arrows.map((key) => CardArrow[key]));
  }
}


