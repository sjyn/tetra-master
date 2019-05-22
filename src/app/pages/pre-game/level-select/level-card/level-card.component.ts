import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ILevel} from '../../../../classes/models/level';

@Component({
  selector: 'app-level-card',
  templateUrl: './level-card.component.html',
  styleUrls: ['./level-card.component.less'],
})
export class LevelCardComponent implements OnInit {
  @Input() disabled: boolean;
  @Input() beaten: boolean;
  @Input() level: ILevel;
  @Input() index: number;
  @Output() selected: EventEmitter<ILevel>;

  constructor() {
    this.selected = new EventEmitter();
  }

  ngOnInit() {

  }

  public selectLevel() {
    if (!this.disabled) {
      this.selected.emit(this.level);
    }
  }

}
