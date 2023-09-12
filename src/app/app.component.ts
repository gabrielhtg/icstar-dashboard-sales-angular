import { Component } from '@angular/core';
import { themeChange } from 'theme-change';

themeChange();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'icstar-dashboard-sales-angular';
}
