import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';

import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {path:'Meu Jardim', component:HomeComponent},
  {path:'menu' , component:MenuComponent},
  {path:'sobre', component:SobreComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'login', component:LoginComponent},
  {path:'carrinho', component:CarrinhoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
