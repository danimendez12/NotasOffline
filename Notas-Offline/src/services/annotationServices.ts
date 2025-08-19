import {Annotation} from '../models/Annotation'

export class AnnotationService {

    private annotations: Annotation[] = [];

    addAnotation(annotation: Annotation ) {
        this.annotations.push(annotation);
    }

    getAnotationsByNoteId(notaId: string): Annotation[] {
        return this.annotations.filter(a => a.notaId === notaId);
    }

    updateAnotation(updated: Annotation) {
        const index = this.annotations.findIndex(a => a.id === updated.id);
        if (index !== -1) {
            this.annotations[index] = updated;
        }
    }

    deleteAnotation(id: string) {
        const annotation = this.annotations.find(a => a.id === id);
        if (annotation){
            annotation.deleteAnnotation();
        }

    }

}