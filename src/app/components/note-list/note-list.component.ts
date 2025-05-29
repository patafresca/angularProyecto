import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor, *ngIf, etc.
import { NoteService } from '../../services/note.service';
import { Note } from '../../components/models/note.model';

@Component({
  selector: 'app-note-list',
  standalone: true, // ✅ esto lo convierte en un componente independiente
  imports: [CommonModule], // ✅ importa lo que usas en el HTML (como *ngFor)
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe({
      next: (data) => {
        this.notes = data;
        console.log('Notas cargadas:', this.notes); 
      },
      error: (err) => {
        console.error('Error cargando notas:', err);
      }
    });
  }
}
