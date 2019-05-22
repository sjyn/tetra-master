import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../../../classes/models/card';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.less'],
})
export class DeckComponent implements OnInit {
  @Input() cards: Card[];
  @Input() playerDeck: boolean;
  @Output() cardSelected: EventEmitter<Card>;

  constructor() {
    this.cardSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  public cardPressed(card: Card) {
    this.cardSelected.emit();
  }

}
