import { Component } from '@angular/core';


@Component({
  selector: 'app-ejemplo-1',
  imports: [],
  templateUrl: './ejemplo-1.component.html',
  styleUrl: './ejemplo-1.component.css',
  template:`Hello {{ city }}, {{ 2 + 2 }}`,
  styles:`:host{color:blue;}`,
})
export class Ejemplo1Component {
  city = 'Lima';
}
