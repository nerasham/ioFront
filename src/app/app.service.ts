import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class AppService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private Url = 'http://192.168.0.105:8080/jason';

  constructor(private http: HttpClient) {
  }


  getNode (): Observable<any> {
    return this.http.get<any>(this.Url + '/test2');
  }
  getGreedy (): Observable<any[]> {
    return this.http.get<any[]>(this.Url + '/greedy');
  }

}
