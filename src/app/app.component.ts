import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxJsComponent } from './rx-js/rx-js.component';
import { MonsterLessonsComponent } from './monster-lessons/monster-lessons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RxJsComponent, MonsterLessonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
