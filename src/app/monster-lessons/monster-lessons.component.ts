import { Component } from '@angular/core';
import { from, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-monster-lessons',
  standalone: true,
  imports: [],
  templateUrl: './monster-lessons.component.html',
  styleUrl: './monster-lessons.component.scss',
})
export class MonsterLessonsComponent {
  lasha: any = [];
  constructor() {
    // const num$ = of([1, 2, 3]);
    // num$.pipe(map((data) => data.map((x) => x - 1))).subscribe((tra) => {
    //   console.log(tra, 'asdasd');
    //   this.lasha.push(...tra);
    // });
    // const request = 'https://restcountries.com/v3.1/capital/tbilisi';
    // const req = ajax(request).subscribe(
    //   (res) => console.log(res, 'res'),
    //   (err) => console.log(err, 'err')
    // );
  }
}
