type Types = 'text' | 'money' | 'date' | 'select' | 'toggle' | string;

export interface DataColumns {
    name: string;
    key: string;
    class?: string;
    hidden?: boolean;
    types: {
        type: Types;
        settings?: any;
        format?: string;
    };
}
