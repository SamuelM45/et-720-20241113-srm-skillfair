import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,  // Make it a standalone component
  template: `
    <header class="container">
      <div class="row">
        <h1 class="col-sm-8">Skillfair</h1>
        <nav class="col-sm-4">
          <p>newest</p>
          <p>catalogue</p>
          <p>contact</p>
        </nav>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}

