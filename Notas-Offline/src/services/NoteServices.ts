import {Note} from '../models/Note'

export class NoteService {
    private notes: Note[] = [];

    addNote(note: Note) {
        this.notes.push(note);
    }

    getNotes() {
        return this.notes.filter(n => n.isActive);
    }

    getNoteById(id: string) {
        return this.notes.find(note=> note.id === id);
    }

    updateNote(updatedNote: Note) {
        const index = this.notes.findIndex(note => note.id === updatedNote.id);
        if (index > -1) {
            updatedNote.modifiedDate = new Date();
            this.notes[index] = updatedNote;
        }
    }

    deleteNote(id: string) {
        const note = this.notes.find(n => n.id === id);
        if (note) {
            note.deleteNote();

        }
    }

}