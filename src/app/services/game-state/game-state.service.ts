import {Injectable} from '@angular/core';
import {IProfile} from '../../classes/models/profile';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  private profile: IProfile;

  constructor() {
  }

  public setProfile(profile: IProfile) {
    this.profile = profile;
  }
}
