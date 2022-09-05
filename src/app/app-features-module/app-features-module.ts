import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurguerListComponent } from './burguer-list/burguer-list.component';
import { BurguerAddComponent } from './burguer-add/burguer-add.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BurguerListComponent, BurguerAddComponent],
  exports: [BurguerListComponent, BurguerAddComponent],
  imports: [CommonModule, HttpClientModule],
})
export class AppFeaturesModule {}
