import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBurguerList } from '../module/iburguer-list';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BurguerListsService {
  public emitEvent = new EventEmitter();
  private url: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  public getListBurguer(): Observable<IBurguerList> {
    return this.http.get<IBurguerList>(`${this.url}list-burguer`).pipe(
      (response) => response,
      (error) => error
    );
  }

  public postListBurguer(object: IBurguerList): Observable<IBurguerList> {
    return this.http
      .post<IBurguerList>(`${this.url}list-burguer`, {
        name: object.name,
        ingredients: object.ingredients,
        price: object.price,
      })
      .pipe(
        (response) => response,
        (error) => error
      );
  }
}
