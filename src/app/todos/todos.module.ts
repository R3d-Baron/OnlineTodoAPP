import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

//importing Pagination Module at todos module
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    TodosComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class TodosModule { }
