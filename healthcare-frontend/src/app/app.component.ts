import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Medicare';
  color = 'accent';
  checked = false;
  disabled = false;
  num1: number = 1
}
