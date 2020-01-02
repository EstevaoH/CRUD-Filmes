import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme';
import { FilmeService } from '../services/filme.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizar-filme',
  templateUrl: './atualizar-filme.component.html',
  styleUrls: ['./atualizar-filme.component.css']
})
export class AtualizarFilmeComponent implements OnInit {

  filme: Filme;
  mensagem  = '';

  constructor(private fs: FilmeService, private rotas: ActivatedRoute) {
    this.filme = new Filme();
   }

  ngOnInit() {
    this.rotas.paramMap.subscribe((res: any)=>{
      let id: number;
      id = res.params.id
      this.buscarFilme(id);
    });
  }

  buscarFilme(id){
    this.fs.buscarID(id).subscribe(
      res => {
        if (res[0]) {
          this.filme = res[0];
        }
        console.log(res[0]);
      }
    );
  };

  atualizarFilme(){
    this.fs.atualizarfilme(this.filme).subscribe(
      res => {
        if (res) {
          this.mensagem = "Autor atualizado com sucesso !!!";
          this.filme = res;
        } else {
          this.mensagem = "Não foi possivel fazer a atualização do autor.";
        };
      }
    )
  }


}
