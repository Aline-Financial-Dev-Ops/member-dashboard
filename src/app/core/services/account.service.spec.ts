import {TestBed} from '@angular/core/testing';

import {AccountService} from './account.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '@environments/environment';


describe('AccountService', () => {
  let service: AccountService;
  let httpMock: HttpTestingController;
  let api = environment.application.api;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AccountService
      ]
    });
    service = TestBed.inject(AccountService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should call the get accounts by member ID api endpoint when getAccounts function is called', () => {
    service.getAccounts(1).subscribe();
    const req = httpMock.expectOne(`${api}/members/1/accounts`);
    expect(req.request.url).toBe(`${api}/members/1/accounts`);
  });
});
