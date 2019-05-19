import {Component, OnInit} from '@angular/core';
import {AudioPlayerService, SoundEffect} from '../../../services/audio-player/audio-player.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor(
    public audioService: AudioPlayerService,
  ) { }

  ngOnInit() {
  }

  public playMenuSound() {
    this.audioService.playSound(SoundEffect.MenuSelection);
  }

}
