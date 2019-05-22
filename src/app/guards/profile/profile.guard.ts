import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {ProfileService} from '../../services/profile/profile.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IProfile} from '../../classes/models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileGuard implements CanActivate {
  constructor(
    private profileService: ProfileService,
    private router: Router,
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.profileService.getProfile()
      .pipe(
        map((profile: IProfile) => {
          if (!profile) {
            this.router.navigate(['/profile']);
            return false;
          } else {
            return true;
          }
        }),
      );
  }
}
