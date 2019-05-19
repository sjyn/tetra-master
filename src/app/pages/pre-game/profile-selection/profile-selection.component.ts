import {Component, OnInit} from '@angular/core';
import {GameStateService} from '../../../services/game-state/game-state.service';
import {take} from 'rxjs/operators';
import {ProfileService} from '../../../services/profile/profile.service';
import {IProfile, Profile} from '../../../classes/models/profile';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-selection',
  templateUrl: './profile-selection.component.html',
  styleUrls: ['./profile-selection.component.less'],
})
export class ProfileSelectionComponent implements OnInit {
  public profiles: IProfile[];
  public loading: boolean;

  constructor(
    private profileService: ProfileService,
    private gameState: GameStateService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.profiles = [];
    this.loading = true;
    this.profileService.getAllProfiles()
      .pipe(take(1))
      .subscribe((result) => {
        this.profiles = result;
        this.loading = false;
      }, () => {
        this.loading = false;
      });
  }

  public deleteProfile(profile: IProfile) {
    this.profileService.deleteProfile(profile)
      .pipe(take(1))
      .subscribe(() => {
        this.profiles = this.profiles.filter((ip) => ip.id !== profile.id);
      });
  }

  public addProfile() {
    this.profiles.push(new Profile());
  }

  public selectProfile(profile: IProfile) {
    this.gameState.setProfile(profile);
    this.router.navigate(['/setup/level']);
  }

  public saveProfile(profile: IProfile) {
    this.profileService.saveProfile(profile)
      .pipe(take(1))
      .subscribe();
  }

}
