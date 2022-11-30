import { Component } from '@angular/core';
import { LoadingService } from '@cluntor/users';
@Component({
  selector: 'cluntor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public loadingService: LoadingService){

  }
  title = 'admin';
}
