import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  nota?: Note;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.noteService.getNote(id).subscribe({
        next: (data) => {
          this.nota = data;
          console.log('Nota cargada:', this.nota);
        },
        error: (err) => {
          console.error('Error al cargar la nota:', err);
        }
      });
    }
  }
}
