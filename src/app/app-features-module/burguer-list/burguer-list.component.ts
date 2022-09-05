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

  constructor(private burguerListsServices: BurguerListsService) {}

  ngOnInit(): void {
    this.burguerListsServices.getListBurguer().subscribe({
      next: (response) => (this.listBurguer = response),
      error: (error) => console.log(error),
    });
  }
}
