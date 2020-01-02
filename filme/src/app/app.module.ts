import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TabelaFilmesComponent } from './tabela-filmes/tabela-filmes.component';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { BuscarFilmeComponent } from './buscar-filme/buscar-filme.component';
import { AtualizarFilmeComponent } from './atualizar-filme/atualizar-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabelaFilmesComponent,
    CadastroFilmesComponent,
    BuscarFilmeComponent,
    AtualizarFilmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
