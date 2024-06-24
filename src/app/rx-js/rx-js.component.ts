import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-rx-js',
  standalone: true,
  imports: [],
  templateUrl: './rx-js.component.html',
  styleUrl: './rx-js.component.scss',
})
export class RxJsComponent implements OnInit {
  myTest$ = fromEvent(document, 'click');
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.myTest$.subscribe((x: any) => {
      console.log(x.altitudeAngle);
    });
    this.http
      .get('https://restcountries.com/v3.1/capital/tb')
      .pipe(
        map((res: any) => {
          console.log(res[0].borders);
        })
      )
      .subscribe((response: any) => {});
  }
}
