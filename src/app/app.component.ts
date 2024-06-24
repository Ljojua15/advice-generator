import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxJsComponent } from './rx-js/rx-js.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RxJsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
