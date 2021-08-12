import { Component } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  showAlert() {
    alert('Starting the game');
  }
}
