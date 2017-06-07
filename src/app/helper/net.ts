import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Net {

  constructor(private http: Http) { }

  public request(url, method, data): Promise<object> {
    
    let options = {
        headers: {
            'Accept': 'application/json'
        }
    }
    let rq = method === 'get' ? this.http[method](url,options) : this.http[method](url, JSON.stringify(data),options);

    return rq.toPromise()
           .then(response => response.json() as object)
           .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject({error : error});
  }

}