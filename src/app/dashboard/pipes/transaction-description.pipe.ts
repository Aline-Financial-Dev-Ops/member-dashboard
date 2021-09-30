import {Pipe, PipeTransform} from '@angular/core';
import {Transaction, TransactionStatus, TransactionType} from '@core/models/transaction.model';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'transactionDescription'
})
export class TransactionDescriptionPipe implements PipeTransform {

  transform(transaction: Transaction): string {
    const datePipe = new DatePipe('en-us');
    const defaultMessage = `${transaction.merchant ? transaction.merchant.code + ' ' : ''}${TransactionType[transaction.type]} ${datePipe.transform(transaction.date, 'MM/dd')} - ${TransactionStatus[transaction.status]}`;
    const providedDescription = `${transaction.merchant ? transaction.merchant.code + ' - ' : ''}${transaction.description} ${datePipe.transform(transaction.date, 'MM/dd')}`;
    return transaction.description ?
      (transaction.description.trim().length > 0 ? providedDescription : defaultMessage) :
      defaultMessage;
  }

}
