import {Component, Input, OnInit} from '@angular/core';
import {Board} from '../../../classes/models/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less'],
})
export class BoardComponent implements OnInit {
  @Input() board: Board;

  constructor() {
  }

  ngOnInit() {
  }

}
