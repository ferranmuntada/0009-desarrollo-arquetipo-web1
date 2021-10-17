import { Pipe, PipeTransform } from '@angular/core';
import { CONSTANTS } from '@app/core/utils/constants';

@Pipe({
  name: 'proposalStatusPipe'
})
export class ProposalStatusPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case CONSTANTS.STATUS_DRAFT_TYPE:
          return CONSTANTS.STATUS_DRAFT_LITERAL;
      case CONSTANTS.STATUS_PRESENTED_TYPE:
          return CONSTANTS.STATUS_PRESENTED_LITERAL;
      default:
          return '';
    }
  }

}
