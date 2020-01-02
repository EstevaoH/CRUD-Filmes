import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme';
import { FilmeService } from '../services/filme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-filme',
  templateUrl: './buscar-filme.component.html',
  styleUrls: ['./buscar-filme.component.css']
})
export class BuscarFilmeComponent implements OnInit {

  filme: Filme;;
  mensagem = '';
  habilitarBotao = false;

  constructor(private fs: FilmeService, private router: Router) {
    this.filme = new Filme();
  }

  ngOnInit() {
  }

  buscarFilme() {
    this.mensagem = '';
    this.habilitarBotao = false;
    this.fs.buscarfilme(this.filme.nome).subscribe(
      res => {
        if (res) {
          this.habilitarBotao = true;
          this.filme = res;
        }
        else {
          this.mensagem = 'Filme não existe';
        }
        console.log(res);
      }
    );
  };

  atualizar(id){
    this.router.navigate(['/atualizar-filme', id])
  }

  apagarFilme(id){
    console.log('Apagado')
    this.fs.excluirfilme(id).subscribe(
      res =>{
        this.filme = res
      }
    );
  };

}
