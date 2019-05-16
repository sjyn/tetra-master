import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AudioPlayerService, SoundEffect} from '../../services/audio-player.service';

@Component({
  selector: 'app-pre-game',
  templateUrl: './pre-game.component.html',
  styleUrls: ['./pre-game.component.less'],
})
export class PreGameComponent implements OnInit, OnDestroy {
  private paramsSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private audioService: AudioPlayerService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params
      .subscribe((params) => {
        if (params.isAi) {
          // this.router.navigate(['/staging/card-selection']);
        }
      });
  }

  ngOnDestroy(): void {
    if (!!this.paramsSub) {
      this.paramsSub.unsubscribe();
    }
  }

  public goToMenu() {
    this.audioService.playSound(SoundEffect.MenuSelection);
    this.router.navigate(['/menu']);
  }

}
