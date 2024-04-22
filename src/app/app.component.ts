import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'moja apka v. 0.1';
  opis = 'pierwszy dzien szkolenia';
  ngOnDestroy(): void {
    console.log('dzialam w OnDestroy')
  }
}
