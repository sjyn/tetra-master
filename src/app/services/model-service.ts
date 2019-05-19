import {DatabaseService} from './database/database.service';
import {IModel} from '../classes/models/model';

export abstract class ModelService<T extends IModel> {
  protected constructor(
    protected databaseService: DatabaseService,
  ) {
  }

  protected abstract getDataFromModel(model: T): any;

  public save(model: T) {
    const data = this.getDataFromModel(model);
  }

}
