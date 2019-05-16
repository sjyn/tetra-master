import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AudioPlayerService, MusicTrack, SoundEffect} from '../../services/audio-player.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.less'],
})
export class MainMenuComponent implements OnInit {

  constructor(
    private router: Router,
    private audioService: AudioPlayerService,
  ) {
  }

  ngOnInit() {
    if (!this.audioService.isMusicPlaying()) {
      this.audioService.playMusic(MusicTrack.MenuMusic);
    }
  }

  public startAIGame() {
    this.audioService.playSound(SoundEffect.MenuSelection);
    this.router.navigate(['/staging', true]);
  }

  public startTwoPlayerSession() {

  }

  public goToAbout() {
    this.audioService.playSound(SoundEffect.MenuSelection);
    this.router.navigate(['/menu/about']);
  }

}
