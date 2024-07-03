import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SecurityContext, inject } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';
import { fromEvent, map, scan, throttleTime } from 'rxjs';
import { SafeUrlPipe } from '../../pipe/safe-url.pipe';

@Component({
  selector: 'app-rx-js',
  standalone: true,
  templateUrl: './rx-js.component.html',
  styleUrl: './rx-js.component.scss',
  imports: [CommonModule, SafeUrlPipe],
})
export class RxJsComponent implements OnInit {
  myTest$ = fromEvent(document, 'click');
  private http = inject(HttpClient);
  private sanitaizer = inject(DomSanitizer);
  x!: any;
  capital: string = 'tbilisi';
  mapUrl!: any;
  ngOnInit(): void {
    this.myTest$.subscribe(() => {
      console.log('x');
    });

    this.http
      .get(`https://restcountries.com/v3.1/capital/${this.capital}`)
      .pipe(
        map((res: any) => {
          console.log(res[0], 'sadas');

          const all = res[0];

          return {
            countryName: all.name.common,
            flag: all.flags.png,
            Currency: (Object.values(all.currencies)[0] as any).name,
            symbol: (Object.values(all.currencies)[0] as any).symbol,
            border: all.borders,
            continents: all.continents,
            languages: Object.values(all.languages)[0] as any,
            region: all.region,
            weekDayes: all.startOfWeek,
            map: this.transformToEmbedUrl(all.maps.googleMaps),
            population: all.population,
          };
        })
      )
      .subscribe((response: any) => {
        this.x = response;

        this.mapUrl = response.map;
        console.log(this.mapUrl.changingThisBreaksApplicationSecurity, '123');
      });
  }

  transformToEmbedUrl(y: string): string {
    // Check if the URL contains '/maps/'
    const mapsIndex = y.indexOf('/maps/');
    console.log(mapsIndex);

    if (mapsIndex !== -1) {
      // Split the URL into two parts
      const baseUrl = y.substring(0, mapsIndex + 6);
      const placeId = y.substring(mapsIndex + 6);

      // Construct the embed URL
      const embedUrl = `${baseUrl}embed/v1/place/${placeId}`;
      return embedUrl;
    } else {
      // If '/maps/' segment is not found, return the original URL
      return y;
    }
  }
}
