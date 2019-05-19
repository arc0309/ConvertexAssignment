import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('/api/initialvalues');
  }

  public postUserJSON(user: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post('/api/savevalues', user, {headers: headers});
  }
}
