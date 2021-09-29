import {Pipe, PipeTransform} from '@angular/core';
import {Transaction} from '@core/models/transaction.model';

@Pipe({
  name: 'transactionDescription'
})
export class TransactionDescriptionPipe implements PipeTransform {

  transform(transaction: Transaction, noDescriptionMessage: string = 'No description'): string {
    return transaction.description ?
      (transaction.description.trim().length > 0 ? transaction.description : noDescriptionMessage) :
      noDescriptionMessage;
  }

}
