import { Component } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  template: `
    <section class="jumbotron">
      <div class="container">
        <div class="row text-center">
          <h2>Homemade Goods</h2>
          <h3>This Year's Best</h3>
          <a class="btn btn-primary" href="#">See all</a>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {}
