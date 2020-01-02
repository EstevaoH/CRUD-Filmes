import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme';
import { FilmeService } from '../services/filme.service';

@Component({
  selector: 'app-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.css']
})
export class CadastroFilmesComponent implements OnInit {

  filme: Filme;
  mensagem= '';
  constructor(private fs: FilmeService) { 
    this.filme = new Filme();
  }

  ngOnInit() {
  }

  cadastraFilme(){
    this.mensagem = '';
    this.fs.cadastrafilme(this.filme).subscribe(
      res =>{
        if (res) {
          this.mensagem = "Filme cadastrada com Sucesso !";
          this.filme = res;
          console.log(res)
        }else{
          this.mensagem = "Algo de errado não estar Certo !!"
        };
      }
    )
  }

}
