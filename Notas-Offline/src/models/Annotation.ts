export class Annotation {
    private _id: string;
    private _notaId: string;
    private _element: string;
    private _prefix: string;
    private _suffix: string;
    private _annotation: string;
    private _createdDate: Date;
    private _isActive: boolean;


    constructor(notaId: string, element: string, prefix: string, sufix: string, annotation?: string) {
        this._id = crypto.randomUUID();
        this._notaId = notaId;
        this._element = element;
        this._prefix = prefix;
        this._suffix = sufix;
        this._annotation = annotation ?? "Add your annotation";
        this._createdDate = new Date();
        this._isActive = true;
    }


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get notaId(): string {
        return this._notaId;
    }

    set notaId(value: string) {
        this._notaId = value;
    }

    get element(): string {
        return this._element;
    }

    set element(value: string) {
        this._element = value;
    }

    get prefix(): string {
        return this._prefix;
    }

    set prefix(value: string) {
        this._prefix = value;
    }

    get suffix(): string {
        return this._suffix;
    }

    set suffix(value: string) {
        this._suffix = value;
    }

    get annotation(): string {
        return this._annotation;
    }

    set annotation(value: string) {
        this._annotation = value;
    }

    get createdDate(): Date {
        return this._createdDate;
    }

    set createdDate(value: Date) {
        this._createdDate = value;
    }


    get isActive(): boolean {
        return this._isActive;
    }

    set isActive(value: boolean) {
        this._isActive = value;
    }

    modifyAnnotation(element: string) {
        this._annotation = element;
    }

    deleteAnnotation() {
        this._isActive = false;
    }


    toDB(){
        return {
            id: this.id,
            notaId: this.notaId,
            element: this.element,
            prefix: this.prefix,
            suffix: this.suffix,
            annotation: this.annotation,
            createdDate: this.createdDate.toISOString(),
            isActive: this._isActive
        }
    }
}