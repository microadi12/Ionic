import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private menucontroller : MenuController) {}

  openFirst() {
    this.menucontroller.enable(true, 'first');
    this.menucontroller.open('first');
  }

  openEnd() {
    this.menucontroller.open('end');
  }

  openCustom() {
    this.menucontroller.enable(true, 'custom');
    this.menucontroller.open('custom');
  }

}
