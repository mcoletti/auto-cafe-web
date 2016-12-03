import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {DealerShip} from "../../../../_models/dealerShip";

@Component({
  selector: 'dealer-selector',
  templateUrl: './dealer-selector.component.html',
  styleUrls: ['./dealer-selector.component.css']
})
export class DealerSelectorComponent implements OnInit {


  // @Output() select = new EventEmitter();
  @Input() dealerShips:DealerShip[];
  @Output() click = new EventEmitter();
  @Output() change = new EventEmitter();
  constructor() {

    // console.log(this.dealerShips);

  }



  ngOnInit() {
    // this.click.emit('');
  }

}
