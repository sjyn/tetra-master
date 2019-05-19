import {Injectable} from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {IProfile} from '../../classes/models/profile';
import {Observable} from 'rxjs';
import {ObjectStore} from '../database/object-store';

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

  public getProfile(id: string): Observable<IProfile> {
    return this.databaseService.getEntity(ObjectStore.Profiles, id);
  }

  public getAllProfiles(): Observable<IProfile[]> {
    return this.databaseService.getAllEntities(ObjectStore.Profiles);
  }

  public deleteProfile(profile: IProfile): Observable<void> {
    return this.databaseService.deleteEntity(ObjectStore.Profiles, profile);
  }
}
