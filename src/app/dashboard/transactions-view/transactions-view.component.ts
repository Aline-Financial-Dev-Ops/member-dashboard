import {Component, Input, OnInit} from '@angular/core';
import {TransactionService} from '@core/services/transaction.service';
import {AuthService} from '@core/services/auth.service';
import {Transaction, TransactionType} from '@core/models/transaction.model';

export type TransactionsViewMode = 'MEMBER' | 'ACCOUNT';

@Component({
  selector: 'app-transactions-view',
  templateUrl: './transactions-view.component.html',
  styleUrls: ['./transactions-view.component.sass']
})
export class TransactionsViewComponent implements OnInit {

  @Input()
  mode!: TransactionsViewMode;
  @Input()
  accountId?: number;
  transactions?: Transaction[];
  totalElements = 0;
  pageSize = 5;
  pageSort = 'date';

  constructor(private authService: AuthService,
              private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.loadPage(0);
  }

  loadPage(currentPage: number) {
    switch (this.mode) {
      case 'ACCOUNT':
        this.loadAccountPage(currentPage);
        break;
      case 'MEMBER':
        this.loadMemberPage(currentPage);
        break;
    }
  }

  loadAccountPage(currentPage: number) {
    if (!this.accountId)
      throw new Error('View mode is "ACCOUNT" but no account ID is provided...');

    this.authService.currentUser.subscribe(user => {
      if (user) {
        this.transactionService.getTransactionsByAccountId(this.accountId!, {
          sort: this.pageSort,
          size: this.pageSize,
          page: currentPage - 1
        })
          .subscribe(page => {
            this.transactions = page.content;
            this.totalElements = page.totalElements;
          });
      }
    });
  }

  loadMemberPage(currentPage: number) {
    this.authService.currentUser.subscribe(user => {
      if (user) {
        this.transactionService.getTransactionsByMemberId(user.memberId, {
          sort: this.pageSort,
          size: this.pageSize,
          page: currentPage - 1
        })
          .subscribe(page => {
            this.transactions = page.content;
            this.totalElements = page.totalElements;
          });
      }
    });
  }

  isDecreasing(transaction: Transaction): boolean {
    switch (transaction.type) {
      case TransactionType.PAYMENT:
      case TransactionType.PURCHASE:
      case TransactionType.TRANSFER_OUT:
      case TransactionType.WITHDRAWAL:
        return true;
      default:
        return false;
    }
  }

  isIncreasing(transaction: Transaction): boolean {
    switch (transaction.type) {
      case TransactionType.DEPOSIT:
      case TransactionType.TRANSFER_IN:
      case TransactionType.REFUND:
        return true;
      default:
        return false;
    }
  }

}
