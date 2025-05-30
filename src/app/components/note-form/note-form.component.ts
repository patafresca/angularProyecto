import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {
  noteForm: FormGroup;

  constructor(private fb: FormBuilder, private noteService: NoteService, private router: Router) {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  crearNota(): void {
    if (this.noteForm.valid) {
      this.noteService.addNote(this.noteForm.value).subscribe({
        next: (res) => {
          console.log('Nota creada:', res);
          this.router.navigate(['/']); 
        },
        error: (err) => {
          console.error('Error al crear la nota:', err);
        }
      });
    }
  }
}
