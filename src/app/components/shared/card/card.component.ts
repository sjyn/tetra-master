import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card, ICard} from '../../../classes/models/card';
import {AudioPlayerService, SoundEffect} from '../../../services/audio-player/audio-player.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() cardPressed: EventEmitter<Card>;

  public get cardAsset(): string {
    return `/assets/cards/${this.card.cardImage}.gif`;
  }

  public get isRedCard(): boolean {
    return this.card.cardColor === 'red';
  }

  constructor(
    private audioService: AudioPlayerService,
  ) {
    this.cardPressed = new EventEmitter();
  }

  ngOnInit() {
  }

  public handleCardPressed() {
    this.audioService.playSound(SoundEffect.MenuSelection);
    this.cardPressed.emit(this.card);
  }
}
