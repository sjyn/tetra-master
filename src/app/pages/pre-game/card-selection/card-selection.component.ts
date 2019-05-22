import {Component, OnInit} from '@angular/core';
import {Card, ICard} from '../../../classes/models/card';
import {transferArrayItem} from '@angular/cdk/drag-drop';
import {getRandom} from '../../../classes/utils';
import {AudioPlayerService, MusicTrack, SoundEffect} from '../../../services/audio-player/audio-player.service';
import {ProfileService} from '../../../services/profile/profile.service';
import {take} from 'rxjs/operators';
import {GameStateService} from '../../../services/game-state/game-state.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.less'],
})
export class CardSelectionComponent implements OnInit {
  public availableCards: Card[];
  public selectedCards: Card[];

  constructor(
    private audioPlayer: AudioPlayerService,
    private profileService: ProfileService,
    private gameService: GameStateService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.selectedCards = [];
    this.availableCards = [];
    this.profileService.getProfile()
      .pipe(take(1))
      .subscribe((profile) => {
        this.availableCards = profile.cards
          .map((card) => new Card(card));
      });
    if (!this.audioPlayer.isMusicPlaying()) {
      this.audioPlayer.playMusic(MusicTrack.MenuMusic);
    }
  }

  public pickFiveRandom() {
    this.clearSelected();
    const randomCards = getRandom(this.availableCards, 5);
    const chosenIds = randomCards.map((card) => card.id);
    this.availableCards = this.availableCards.filter((card) => chosenIds.indexOf(card.id) === -1);
    this.selectedCards = randomCards;
  }

  public clearSelected() {
    this.audioPlayer.playSound(SoundEffect.MenuSelection);
    this.availableCards = this.availableCards.concat(this.selectedCards);
    this.selectedCards = [];
  }

  public moveToSelected(card: ICard, cardIndex: number) {
    if (this.selectedCards.length < 5) {
      transferArrayItem(this.availableCards, this.selectedCards, cardIndex, this.selectedCards.length);
    }
  }

  public moveToAvailable(card: ICard, cardIndex: number) {
    transferArrayItem(this.selectedCards, this.availableCards, cardIndex, this.availableCards.length);
  }

  public cardsSelected() {
    this.gameService.playerCards = this.selectedCards;
    this.router.navigate(['/game']);
  }
}
