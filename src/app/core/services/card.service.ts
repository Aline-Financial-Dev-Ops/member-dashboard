import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivateCardRequest} from '@core/models/activate-card-request.model';
import {BaseHttpService} from '@core/services/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class CardService extends BaseHttpService {

  constructor(private http: HttpClient) {
    super();
  }

  activateCard(request: ActivateCardRequest) {
    return this.http.post(this.getApi('/cards/activation'), request);
  }


}
