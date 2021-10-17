import { ActionsMenuInterface } from '../../interfaces/data-table/actions.interface';

export const OPTION_EDIT = 1;
export const OPTION_CONSULT = 2;
export const OPTION_COPY = 3;
export const OPTION_CANCEL = 4;
export const OPTION_PDF_PROPOSAL = 5;
export const OPTION_PDF_RECORDS = 6;

export const datatableActionsMock: ActionsMenuInterface[] = [
  {
    id: OPTION_EDIT,
    name: 'Editar',
    icon: 'edit',
  },
  {
    id: OPTION_CONSULT,
    name: 'Consultar',
    icon: 'search',
    disabled: true,
  },
  {
    id: OPTION_COPY,
    name: 'Copiar',
    icon: 'content_copy',
  },
  {
    id: OPTION_CANCEL,
    name: 'Anular',
    icon: 'delete',
  },
  {
    id: OPTION_PDF_PROPOSAL,
    name: 'PDF Propuesta',
    icon: 'insert_drive_file',
    disabled: true,
  },
  {
    id: OPTION_PDF_RECORDS,
    name: 'PDF Fichas',
    icon: 'insert_drive_file',
    disabled: true,
  },
];
