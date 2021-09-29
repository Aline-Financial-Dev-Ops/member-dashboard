import {TransactionDescriptionPipe} from './transaction-description.pipe';
import {Transaction, TransactionMethod, TransactionStatus, TransactionType} from '@core/models/transaction.model';

describe('TransactionDescriptionPipe', () => {
  let pipe: TransactionDescriptionPipe;

  beforeEach(() => {
    pipe = new TransactionDescriptionPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return description if not blank', () => {
    const transaction: Transaction = {
      accountNumber: '',
      amount: 0,
      date: new Date(),
      initialBalance: 0,
      merchant: {
        name: '',
        description: '',
        code: '',
        registeredAt: new Date()
      },
      method: TransactionMethod.ACH,
      postedBalance: 0,
      status: TransactionStatus.APPROVED,
      type: TransactionType.PURCHASE,
      id: 1,
      description: 'This is a description'
    };

    expect(pipe.transform(transaction)).toBe('This is a description');

  });

  it('should return "No description" if description is undefined', () => {
    const transaction: Transaction = {
      accountNumber: '',
      amount: 0,
      date: new Date(),
      initialBalance: 0,
      merchant: {
        name: '',
        description: '',
        code: '',
        registeredAt: new Date()
      },
      method: TransactionMethod.ACH,
      postedBalance: 0,
      status: TransactionStatus.APPROVED,
      type: TransactionType.PURCHASE,
      id: 1
    };

    expect(pipe.transform(transaction)).toBe('No description');

  });

  it('should return "No description" if description is blank.', () => {
    const transaction: Transaction = {
      accountNumber: '',
      amount: 0,
      date: new Date(),
      initialBalance: 0,
      merchant: {
        name: '',
        description: '',
        code: '',
        registeredAt: new Date()
      },
      method: TransactionMethod.ACH,
      postedBalance: 0,
      status: TransactionStatus.APPROVED,
      type: TransactionType.PURCHASE,
      id: 1,
      description: ' '
    };

    expect(pipe.transform(transaction)).toBe('No description');

  });

  it('should return "Different no description message" if description is blank', () => {
    const transaction: Transaction = {
      accountNumber: '',
      amount: 0,
      date: new Date(),
      initialBalance: 0,
      merchant: {
        name: '',
        description: '',
        code: '',
        registeredAt: new Date()
      },
      method: TransactionMethod.ACH,
      postedBalance: 0,
      status: TransactionStatus.APPROVED,
      type: TransactionType.PURCHASE,
      id: 1
    };

    expect(pipe.transform(transaction, 'Different no description message')).toBe('Different no description message');

  });
});
