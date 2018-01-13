import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AppService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private dictsUrl = 'localhost:8080/jason/test /';

  constructor(private http: Http) {
  }

  getDicts(): Promise<any> {
    return this.http.get(this.dictsUrl)
      .toPromise();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
