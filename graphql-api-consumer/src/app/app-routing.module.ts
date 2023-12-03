import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from 'ngx-design-system-shapa';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), ButtonComponent],
  exports: [RouterModule, ButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
