import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AudioPlayerService, SoundEffect} from '../../../services/audio-player/audio-player.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.less'],
})
export class BackButtonComponent implements OnInit {
  @Output() back: EventEmitter<void>;

  constructor(
    private audioService: AudioPlayerService,
  ) {
    this.back = new EventEmitter();
  }

  ngOnInit() {
  }

  public backPressed() {
    this.audioService.playSound(SoundEffect.MenuSelection);
    this.back.emit();
  }

}
