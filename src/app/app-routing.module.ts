import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankingPageComponent } from './components/banking-page/banking-page.component';

const routes: Routes = [
  { path: ":numCarte", component: BankingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
