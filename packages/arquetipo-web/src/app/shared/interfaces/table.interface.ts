export interface TableColumnInterface {
    key: string;
    name: string;
    hidden?: boolean;
    types: { type: string; settings?: any };
}
