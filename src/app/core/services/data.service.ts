import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataLink } from '../models/link.class';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getJSON(path: string): Observable<Array<IDataLink>> {
    return this.http.get<Array<IDataLink>>(path);
  }
}
