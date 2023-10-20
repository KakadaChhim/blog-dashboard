import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="mt-[80px]">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'blog-dashboard';
}
