import {Component, Input, OnInit} from '@angular/core';
import {TransactionService} from '@core/services/transaction.service';
import {AuthService} from '@core/services/auth.service';
import {Transaction, TransactionType} from '@core/models/transaction.model';
import {TransactionsPage} from '@core/models/transactions-page.model';
import {SortValue} from '@dashboard/transactions-view/sort-toggle/sort-toggle.component';

export type TransactionsViewMode = 'MEMBER' | 'ACCOUNT';

@Component({
  selector: 'app-transactions-view',
  templateUrl: './transactions-view.component.html',
  styleUrls: ['./transactions-view.component.sass']
})
export class TransactionsViewComponent implements OnInit {

  @Input()
  viewTitle = 'Transactions';

  @Input()
  mode!: TransactionsViewMode;
  @Input()
  accountId?: number;
  transactions?: Transaction[];
  totalElements = 0;
  pageSize = 5;
  pageSort = 'date,desc';
  totalPages = 0;
  loaded = false;
  currentPage = 1;
  searchTerm?: string;

  constructor(private authService: AuthService,
              private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.loadPage(1);
  }

  /**
   * Set component members when page is loaded
   * @param page The loaded page
   */
  setMembers(page: TransactionsPage) {
    this.transactions = page.content;
    this.totalElements = page.totalElements;
    this.totalPages = page.totalPages;
    this.loaded = true;
  }

  /**
   * Set the request parameters
   * @param currentPage The current page number to load
   */
  getParams(currentPage: number) {
    return {
      sort: this.pageSort,
      size: this.pageSize,
      page: currentPage - 1,
      search: this.searchTermEmpty() ? undefined : this.searchTerm
    };
  }

  private searchTermEmpty() {
    return (!this.searchTerm || this.searchTerm.trim().length == 0);
  }

  /**
   * Apply the sort value to the page and reload page
   * @param value The value of the sort
   * @param order The order of the sort
   */
  applySort({value, order}: SortValue) {
    this.pageSort = `${value},${order}`;
    this.loadPage(this.currentPage);
  }

  applySearch() {
    console.log(this.searchTerm);
    console.warn('Search has not yet been implemented.');
  }

  loadPage(currentPage: number) {
    this.currentPage = currentPage;
    this.loaded = false;
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
        this.transactionService.getTransactionsByAccountId(this.accountId!, this.getParams(currentPage))
          .subscribe(page => this.setMembers(page));
      }
    });
  }

  loadMemberPage(currentPage: number) {
    this.authService.currentUser.subscribe(user => {
      if (user) {
        this.transactionService.getTransactionsByMemberId(user.memberId, this.getParams(currentPage))
          .subscribe(page => this.setMembers(page));
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
