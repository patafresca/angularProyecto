import { Routes } from '@angular/router';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { NoteFormComponent } from './components/note-form/note-form.component';

export const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'nota/:id', component: NoteDetailComponent },
  { path: 'editar/:id', component: NoteFormComponent },
  { path: 'crear', component: NoteFormComponent },
];
