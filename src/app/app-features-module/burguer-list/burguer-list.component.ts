import { Component, OnInit } from '@angular/core';
import { IBurguerList } from '../../module/iburguer-list';
import { BurguerListsService } from 'src/app/services/burguer-lists-services.service';

@Component({
  selector: 'app-burguer-list',
  templateUrl: './burguer-list.component.html',
  styleUrls: ['./burguer-list.component.scss'],
})
export class BurguerListComponent implements OnInit {
  public listBurguer: IBurguerList | any = [];
  public number(value: string): number {
    return Number(value);
  }

  constructor(private burguerListsServices: BurguerListsService) {}

  ngOnInit(): void {
    this.burguerListsServices.getListBurguer().subscribe({
      next: (response) => (this.listBurguer = response),
      error: (error) => console.log(error),
    });

    this.burguerListsServices.emitEvent.subscribe((response) => {
      return this.listBurguer.push(response);
    });
  }

  public edit(id: number, name: string, ingredients: string, price: number) {
    let newObject: IBurguerList = {
      id: id,
      name: name,
      ingredients: ingredients,
      price: price,
    };

    this.burguerListsServices.editListBurguer(newObject).subscribe({
      next: (response) => console.log(response),
      error: (error) => error,
    });
  }

  public delete(id: number) {
    this.burguerListsServices.deleteListBurguer(id).subscribe({
      next: (this.listBurguer = this.listBurguer.filter(
        (hamburguer: any) => hamburguer.id !== id
      )),
      error: (error) => error,
    });
  }
}
