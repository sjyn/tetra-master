import {Injectable} from '@angular/core';
import {uuidv4} from '../../classes/utils';
import {BehaviorSubject, Observable, Observer, Subject} from 'rxjs';
import {map, skipWhile, switchMap} from 'rxjs/operators';
import {ObjectStore} from './object-store';
import {IModel} from '../../classes/models/model';

const Database = window.indexedDB;

const DB_NAME = 'tetradb';
const DB_VERSION = 1;
const PROFILES_STORE = 'profiles';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private database: IDBDatabase;
  private loadingDatabase: boolean;

  constructor() {
    this.database = null;
    this.loadingDatabase = false;
  }

  public saveEntity<T extends IModel>(objectStore: ObjectStore, model: T): Observable<T> {
    const saver = (): Observable<T> => {
      const objStore = this.getObjectStore(objectStore);
      let request: IDBRequest;
      if (model.id === null) {
        model.id = uuidv4();
        request = objStore.add(model, model.id);
      } else {
        request = objStore.put(model, model.id);
      }
      return Observable.create((obs: Observer<T>) => {
        request.onerror = () => {
          obs.error(request.error);
        };
        request.onsuccess = () => {
          obs.next(model);
        };
      });
    };

    return this.initDatabase()
      .pipe(
        switchMap(() => {
          return saver();
        }),
      );
  }

  public getEntity<T extends IModel>(objectStore: ObjectStore, id: string): Observable<T> {
    const getter = (): Observable<T> => {
      const store = this.getObjectStore(objectStore);
      const request: IDBRequest = store.get(id);
      return Observable.create((obs: Observer<T>) => {
        request.onerror = () => {
          obs.error(request.error);
        };
        request.onsuccess = () => {
          obs.next(request.result);
        };
      });
    };

    return this.initDatabase()
      .pipe(
        switchMap(() => {
          return getter();
        }),
      );
  }

  public getAllEntities<T extends IModel>(objectStore: ObjectStore): Observable<T[]> {
    const getter = (): Observable<T[]> => {
      const store = this.getObjectStore(objectStore);
      const request: IDBRequest = (<any>store).getAll();
      return Observable.create((obs: Observer<T[]>) => {
        request.onsuccess = () => {
          const data = request.result;
          obs.next(data);
        };
        request.onerror = () => {
          obs.error(request.error);
        };
      });
    };

    return this.initDatabase()
      .pipe(
        switchMap(() => {
          return getter();
        }),
      );
  }

  public deleteEntity<T extends IModel>(objectStore: ObjectStore, entity: T): Observable<void> {
    const deleter = (): Observable<void> => {
      const store = this.getObjectStore(objectStore);
      const request: IDBRequest = store.delete(entity.id);
      return Observable.create((obs: Observer<void>) => {
        request.onsuccess = () => {
          obs.next(null);
        };
        request.onerror = () => {
          obs.error(request.error);
        };
      });
    };

    return this.initDatabase()
      .pipe(
        switchMap(() => {
          return deleter();
        }),
      );
  }

  private getObjectStore(store: ObjectStore): IDBObjectStore {
    const transaction = this.database.transaction(store, 'readwrite');
    return transaction.objectStore(store);
  }

  private initDatabase(): Observable<IDBDatabase> {
    const initDatabase = (obs: Observer<IDBDatabase>) => {
      const request = Database.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = (event: any) => {
        this.database = event.target.result;
        if (!this.database.objectStoreNames.contains(PROFILES_STORE)) {
          this.database.createObjectStore(PROFILES_STORE);
        }
        const transaction: IDBTransaction = event.target.transaction;
        transaction.oncomplete = () => {
          this.loadingDatabase = false;
          obs.next(this.database);
        };
        transaction.onerror = () => {
          this.loadingDatabase = false;
          obs.error(transaction.error);
        };
      };
      request.onsuccess = () => {
        this.database = request.result;
        if (!this.database.objectStoreNames.contains(PROFILES_STORE)) {
          this.database.createObjectStore(PROFILES_STORE);
        }
        this.loadingDatabase = false;
        obs.next(this.database);
      };
    };

    const loadDatabase = (obs: Observer<IDBDatabase>) => {
      if (this.database !== null) {
        obs.next(this.database);
      } else if (this.database === null && !this.loadingDatabase) {
        this.loadingDatabase = true;
        initDatabase(obs);
      } else if (this.database === null && this.loadingDatabase) {
        setTimeout(() => {
          loadDatabase(obs);
        }, 200);
      }
    };

    return Observable.create((obs: Observer<IDBDatabase>) => {
      loadDatabase(obs);
    });
  }
}
