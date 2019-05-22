import {Injectable} from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {IProfile} from '../../classes/models/profile';
import {Observable} from 'rxjs';
import {ObjectStore} from '../database/object-store';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(
    private databaseService: DatabaseService,
  ) {
  }

  public saveProfile(profile: IProfile): Observable<IProfile> {
    return this.databaseService.saveEntity(ObjectStore.Profiles, profile);
  }

  public getProfile(): Observable<IProfile> {
    return this.getAllProfiles()
      .pipe(
        map((profiles: IProfile[]) => {
          return profiles[0];
        }),
      );
  }

  public getAllProfiles(): Observable<IProfile[]> {
    return this.databaseService.getAllEntities(ObjectStore.Profiles);
  }

  public deleteProfile(profile: IProfile): Observable<void> {
    return this.databaseService.deleteEntity(ObjectStore.Profiles, profile);
  }
}
