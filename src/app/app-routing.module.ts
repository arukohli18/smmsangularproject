import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EldComponent } from './ELD/eld.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:'maintanence',
    component:TableComponent
  },  
  {
    path:'eld',
    component:EldComponent
  },
/*    {
    path:'*',redirectTo:'maintanence'
  }  */
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

