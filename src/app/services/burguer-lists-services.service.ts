import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBurguerList } from '../module/iburguer-list';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BurguerListsService {
  public emitEvent = new EventEmitter();
  public foodListAlert(value: IBurguerList) {
    return this.emitEvent.emit(value);
  }
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
      .post<IBurguerList>(`${this.url}list-burguer/`, {
        name: object.name,
        ingredients: object.ingredients,
        price: object.price,
      })
      .pipe(
        (response) => response,
        (error) => error
      );
  }

  public editListBurguer(object: IBurguerList): Observable<IBurguerList> {
    return this.http
      .put<IBurguerList>(`${this.url}list-burguer/${object.id}`, {
        id: object.id,
        name: object.name,
        ingredients: object.ingredients,
        price: object.price,
      })
      .pipe(
        (response) => response,
        (error) => error
      );
  }

  public deleteListBurguer(id: number): Observable<IBurguerList> {
    return this.http.delete<IBurguerList>(`${this.url}list-burguer/${id}`).pipe(
      (reponse) => reponse,
      (error) => error
    );
  }
}
