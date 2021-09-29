import {Pipe, PipeTransform} from '@angular/core';
import {Transaction, TransactionStatus} from '@core/models/transaction.model';

@Pipe({
  name: 'transactionStatus'
})
export class TransactionStatusPipe implements PipeTransform {

  transform(transaction: Transaction): unknown {
    return TransactionStatus[transaction.status];
  }

}
