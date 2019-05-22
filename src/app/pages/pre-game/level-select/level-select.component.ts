import {Component, OnInit} from '@angular/core';
import {LevelsService} from '../../../services/levels/levels.service';
import {ILevel} from '../../../classes/models/level';
import {switchMap, take} from 'rxjs/operators';
import {GameStateService} from '../../../services/game-state/game-state.service';
import {IProfile} from '../../../classes/models/profile';
import {Router} from '@angular/router';
import {ProfileService} from '../../../services/profile/profile.service';

@Component({
  selector: 'app-level-select',
  templateUrl: './level-select.component.html',
  styleUrls: ['./level-select.component.less'],
})
export class LevelSelectComponent implements OnInit {
  public levels: ILevel[];
  public profile: IProfile;

  constructor(
    private levelService: LevelsService,
    private profileService: ProfileService,
    private gameService: GameStateService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.profileService.getProfile()
      .pipe(
        switchMap((profile) => {
          this.profile = profile;
          return this.levelService.loadLevels();
        }),
        take(1),
      )
      .subscribe((levels) => {
        this.levels = levels;
      });
  }

  public levelSelected(level: ILevel) {
    this.gameService.level = level;
    this.router.navigate(['/setup/card-select']);
  }

  public goBack() {
    this.router.navigate(['/menu']);
  }

}
