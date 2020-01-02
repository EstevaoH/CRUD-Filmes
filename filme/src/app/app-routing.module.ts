import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { TabelaFilmesComponent } from './tabela-filmes/tabela-filmes.component';
import { BuscarFilmeComponent } from './buscar-filme/buscar-filme.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './auth/authguard.guard';
import { AtualizarFilmeComponent } from './atualizar-filme/atualizar-filme.component';


const routes: Routes = [
  {path: 'cadastro-filme', component: CadastroFilmesComponent, canActivate: [AuthguardGuard]},
  {path: 'tabela-filme', component: TabelaFilmesComponent, canActivate:[AuthguardGuard]},
  {path: 'buscar-filme', component: BuscarFilmeComponent, canActivate:[AuthguardGuard]},
  {path: 'atualizar-filme/:id', component: AtualizarFilmeComponent, canActivate:[AuthguardGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
