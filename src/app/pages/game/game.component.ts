import {Component, OnInit} from '@angular/core';
import {GameStateService} from '../../services/game-state/game-state.service';
import {AudioPlayerService} from '../../services/audio-player/audio-player.service';
import {Board} from '../../classes/models/board';
import {Card} from '../../classes/models/card';
import {ILevel} from '../../classes/models/level';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less'],
})
export class GameComponent implements OnInit {
  public board: Board;
  public playerCards: Card[];
  public challengerCards: Card[];
  public level: ILevel;
  public loading: boolean;
  public loadingProgress: number;

  constructor(
    private gameService: GameStateService,
    private audioService: AudioPlayerService,
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.loadingProgress = 0;
    const interval = setInterval(() => {
      this.loadingProgress += 10;
      if (this.loadingProgress > 100) {
        clearInterval(interval);
        this.loading = false;
      }
    }, 200);

    this.board = Board.generateBoard();
    this.loadPlayerCards();
    this.loadLevel();
  }

  private loadLevel() {
    this.level = this.gameService.level;
    this.audioService.stopCurrentMusic();
    this.audioService.playMusic(this.level.track, true);
    this.challengerCards = this.level.cards
      .map((iCard) => {
        const card = Card.generateRandomCard('blue');
        card.cardImage = iCard;
        return card;
      });
  }

  private loadPlayerCards() {
    this.playerCards = this.gameService.playerCards
      .map((card) => {
        const nCard = new Card(card);
        nCard.id = card.id;
        return nCard;
      });
  }

}
