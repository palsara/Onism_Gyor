import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  appointment: BehaviorSubject<any> = new BehaviorSubject([]);
  appointments: BehaviorSubject<any> = new BehaviorSubject([]);
  article: BehaviorSubject<any> = new BehaviorSubject([]);
  articles: BehaviorSubject<any> = new BehaviorSubject([]);

  apiURL: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  create(tableName: string, data: Object): Observable<any> {
    return this.http.post(`${this.apiURL}/${tableName}`, data);
  }

  read(tableName: string, query?: any) {
    if (query) {
      if (tableName == 'idopontok') {
        this.http
          .get(`${this.apiURL}/${tableName}/${query}`)
          .forEach((data) => this.appointment.next(data));
      }
      if (tableName == 'cikkek') {
        this.http
          .get(`${this.apiURL}/${tableName}/${query}`)
          .forEach((data) => this.article.next(data));
      }
    }
    if (tableName == 'idopontok') {
      this.http
        .get(`${this.apiURL}/${tableName}`)
        .forEach((data) => this.appointments.next(data));
    }
    if (tableName == 'cikkek') {
      this.http
        .get(`${this.apiURL}/${tableName}`)
        .forEach((data) => this.articles.next(data));
    }
  }

  update(tableName:string,query:any,data:Object):Observable<any>{
    return this.http.put(`${this.apiURL}/${tableName}/${query}`,data);
  }

  delete(tableName:string, query:any):void{
    this.http.delete(`${this.apiURL}/${tableName}/${query}`).forEach(
      done=>this.read(tableName)
    )
  }
}
