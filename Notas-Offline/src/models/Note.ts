export class Note {
    private _id: string;
    private _title: string;
    private _content: string;
    private _creationDate: Date;
    private _modifiedDate: Date;
    private _isActive: boolean;

    constructor( title: string, content: string) {
        this._id = crypto.randomUUID();
        this._title = title;
        this._content = content;
        this._creationDate = new Date();
        this._modifiedDate = new Date();
        this._isActive = true;
    }


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get creationDate(): Date {
        return this._creationDate;
    }

    set creationDate(value: Date) {
        this._creationDate = value;
    }

    get modifiedDate(): Date {
        return this._modifiedDate;
    }

    set modifiedDate(value: Date) {
        this._modifiedDate = value;
    }


    get isActive(): boolean {
        return this._isActive;
    }

    set isActive(value: boolean) {
        this._isActive = value;
    }

    updateContent(newContent: string) {
        this._content = newContent;
        this._modifiedDate = new Date();
    }

    deleteNote() {
        this._isActive = false;
        this._modifiedDate = new Date();
    }

    toDB() {
        return {
            id: this._id,
            title: this._title,
            content: this._content,
            creationDate: this._creationDate.toISOString(),
            modifiedDate: this._modifiedDate.toISOString(),
            isActive: this._isActive,
        };
    }
}