import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { fromEvent, map, scan, throttleTime } from 'rxjs';

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
  x!: any;
  capital: string = 'tokyo';

  ngOnInit(): void {
    this.myTest$.subscribe(() => {
      console.log('x');
    });

    this.http
      .get(`https://restcountries.com/v3.1/capital/${this.capital}`)
      .pipe(
        map((res: any) => {
          console.log(res[0], 'sadas');

          return {
            countryName: res[0].altSpellings[1],
            flag: res[0].flags.png,
            Currency: (Object.values(res[0].currencies)[0] as any).name,
            symbol: (Object.values(res[0].currencies)[0] as any).symbol,
            border: res[0].borders,
            continents: res[0].continents,
            languages: Object.values(res[0].languages)[0] as any,
            region: res[0].region,
            weekDayes: res[0].startOfWeek,
          };
        })
      )
      .subscribe((response: any) => {
        this.x = response;
        console.log(this.x);
      });
  }
}
