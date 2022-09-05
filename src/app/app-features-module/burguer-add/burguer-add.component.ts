import { Component, OnInit } from '@angular/core';
import { BurguerListsService } from 'src/app/services/burguer-lists-services.service';
import { IBurguerList } from '../../module/iburguer-list';

@Component({
  selector: 'app-burguer-add',
  templateUrl: './burguer-add.component.html',
  styleUrls: ['./burguer-add.component.scss'],
})
export class BurguerAddComponent implements OnInit {
  public number(value: string): number {
    return Number(value);
  }

  constructor(private burguerListsServices: BurguerListsService) {}

  ngOnInit(): void {}

  public listAddItem(name: string, ingredients: string, price: number) {
    let newObject: IBurguerList = {
      name: name,
      ingredients: ingredients,
      price: price,
    };

    this.burguerListsServices.postListBurguer(newObject).subscribe({
      next: (response) => console.log(response),
      error: (error) => error,
    });
  }
}
