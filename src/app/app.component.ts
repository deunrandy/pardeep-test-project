import { Component } from '@angular/core';
import { ROUTES } from './shared/constants/utils.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public ROUTES = ROUTES
  title = 'test-project';
}
