import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';

  textChange = false;

  onReset() {
    console.log('111');
    this.userName = '';
  }

  createText() {
    console.log('successful');
    this.textChange = true;

  }
}
