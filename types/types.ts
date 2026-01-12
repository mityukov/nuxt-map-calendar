export interface Schema {
    slug: string;
    type: string;
    workers: string[];
    time_slots: string[];
    fields: FieldsSchema;
    field_ids: FieldsSchema;
}

export interface FieldsSchema {
    addr: string|number;
    date: string|number;
    time: string|number|null;
    worker: string|number;
}

export interface User {
    name: string;
    email: string;
}