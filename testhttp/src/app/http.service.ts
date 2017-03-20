import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpService {

  private url = 'https://test1-2d616.firebaseio.com/data.json';

  constructor(private http: Http) { }

  sendData(user : any){
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post(this.url,body,{ headers: headers})
              .map((data: Response) => data.json())
              .catch(this.handleError);    
    
  }

  getOwnData(){
    return this.http.get(this.url)
    .map((res: Response) => res.json());
  }

  private handleError(error:Response){
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
