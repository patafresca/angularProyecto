import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor, *ngIf, etc.

@Component({
  selector: 'app-note-form',
  standalone: true, // ✅ esto lo convierte en un componente independiente
  imports: [CommonModule], // ✅ importa lo que usas en el HTML (como *ngFor)
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'] 
})
export class NoteFormComponent {
  // logica
}
