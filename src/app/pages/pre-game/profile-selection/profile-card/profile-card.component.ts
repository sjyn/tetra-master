import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProfile} from '../../../../classes/models/profile';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.less'],
})
export class ProfileCardComponent implements OnInit {
  @Input() editing = false;
  @Input() profile: IProfile;
  @Output() edited: EventEmitter<IProfile>;
  @Output() deleted: EventEmitter<IProfile>;
  @Output() chosen: EventEmitter<IProfile>;

  constructor() {
    this.edited = new EventEmitter();
    this.deleted = new EventEmitter();
    this.chosen = new EventEmitter();
  }

  ngOnInit() {
  }

  public saveEdits() {
    this.edited.emit(this.profile);
    this.editing = false;
  }

  public deleteProfile() {
    this.deleted.emit(this.profile);
  }

  public beginEditing() {
    this.editing = true;
  }

  public chooseProfile() {
    this.chosen.emit(this.profile);
  }

}
