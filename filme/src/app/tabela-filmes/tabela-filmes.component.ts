import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme';
import { FilmeService } from '../services/filme.service';

@Component({
  selector: 'app-tabela-filmes',
  templateUrl: './tabela-filmes.component.html',
  styleUrls: ['./tabela-filmes.component.css']
})
export class TabelaFilmesComponent implements OnInit {

  filme: Filme;
  constructor(private fs: FilmeService  ) {
    this.filme = new Filme();
   }

  ngOnInit() {
    this.fs.listarfilme().subscribe(
      res =>{
        this.filme = res;
        console.log(res)
      }
    )
  }

}
