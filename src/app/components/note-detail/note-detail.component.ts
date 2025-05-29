import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor, *ngIf, etc.

@Component({
  selector: 'app-note-detail',
  standalone: true, // ✅ esto lo convierte en un componente independiente
  imports: [CommonModule], // ✅ importa lo que usas en el HTML (como *ngFor)
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']

})
export class NoteDetailComponent {
//logica
}
