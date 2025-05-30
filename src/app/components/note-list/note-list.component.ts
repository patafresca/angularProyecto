import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService, private router: Router) {}

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

  irACrearNota(): void {
    this.router.navigate(['/crear']);
  }

  verDetalle(id: number): void {
    this.router.navigate(['/nota', id]);
  }

  editarNota(id: number): void {
    this.router.navigate(['/editar', id]);
  }

  eliminarNota(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta nota?')) {
      this.noteService.deleteNote(id).subscribe({
        next: () => {
          this.notes = this.notes.filter(note => note.id !== id);
          console.log('Nota eliminada');
        },
        error: (err) => {
          console.error('Error al eliminar la nota:', err);
        }
      });
    }
  }
}
