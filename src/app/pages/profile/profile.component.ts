import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile/profile.service';
import {IProfile, Profile} from '../../classes/models/profile';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AudioPlayerService, SoundEffect} from '../../services/audio-player/audio-player.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  public profile: IProfile;

  constructor(
    private profileService: ProfileService,
    private audioService: AudioPlayerService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.profileService.getProfile()
      .pipe(take(1))
      .subscribe((profile: IProfile) => {
        if (!profile) {
          this.profile = new Profile();
        } else {
          this.profile = profile;
        }
      });
  }

  public save() {
    this.audioService.playSound(SoundEffect.MenuSelection);
    this.profileService.saveProfile(this.profile)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['/menu']);
      });
  }

}
