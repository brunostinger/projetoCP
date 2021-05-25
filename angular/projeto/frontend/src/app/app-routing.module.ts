import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriaProdutoComponent } from './components/produtos/cria-produto/cria-produto.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'produtos', component : ProdutoCrudComponent},
  {path: 'produtos/create', component : CriaProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
