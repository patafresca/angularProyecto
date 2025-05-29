import { Component } from '@angular/core';
import { NoteListComponent } from './components/note-list/note-list.component';  // Importa el componente usado

@Component({
  selector: 'app-root',
  standalone: true,               // Muy importante para standalone components
  imports: [NoteListComponent],   // Aquí declaras los componentes que usas en el template
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JavaScriptPC2';
}
