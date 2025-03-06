import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejemplo1Component } from './ejemplo-1/ejemplo-1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ejemplo1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';
  city = 'San Francisco';
  isServerRunning = true;
  Users = [{ id: 0, name: 'Sarah' }, { id: 1, name: 'Amy' }, { id: 2, name: 'Rachel' }, { id: 3, name: 'Jessica' }, { id: 4, name: 'Poornima' }];
  isEditable = true;
  imageURL = "https://github.com/srodriguezrobayo/Despliegue/blob/main/backend/uploads/user.png?raw=true"
  onMouseOver() {
    alert('¡Bien hecho! 🚀');
  }
  greet() {
    alert('Formulario enviado ✅');
  }
  occupation = "";
}