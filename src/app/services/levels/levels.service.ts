import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ILevel} from '../../classes/models/level';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LevelsService {

  constructor(
    private client: HttpClient,
  ) {
  }

  public loadLevels(): Observable<ILevel[]> {
    return this.client.get('assets/levels/levels.json')
      .pipe(
        map((reponse: any) => {
          return reponse.levels;
        }),
      );
  }
}
