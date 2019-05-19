import {Injectable} from '@angular/core';

export enum SoundEffect {
  MenuSelection = 'menu_selection.wav',
}

export enum MusicTrack {
  MenuMusic = 'Buy_Something!.mp3',
}

@Injectable({
  providedIn: 'root',
})
export class AudioPlayerService {
  private soundEffectPlayer;
  private musicPlayer;

  constructor() {
    this.soundEffectPlayer = new Audio();
    this.musicPlayer = new Audio();
  }

  public playSound(soundEffect: SoundEffect): Promise<any> {
    const fullPath = `/assets/sounds/${soundEffect}`;
    this.soundEffectPlayer.src = fullPath;
    this.soundEffectPlayer.load();
    return this.soundEffectPlayer.play();
  }

  public playMusic(music: MusicTrack, loop: boolean = true) {
    const fullPath = `/assets/music/${music}`;
    this.musicPlayer.src = fullPath;
    if (loop) {
      this.musicPlayer.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
      }, false);
    }
    this.musicPlayer.load();
    this.musicPlayer.play();
  }

  public stopCurrentMusic() {
    this.musicPlayer.stop();
  }

  public pauseCurrentMusic() {
    this.musicPlayer.pause();
  }

  public isMusicPlaying(): boolean {
    return this.musicPlayer.duration > 0 && !this.musicPlayer.paused;
  }
}
