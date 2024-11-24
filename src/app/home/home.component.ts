import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../service/noticia.service';
import { Noticia } from '../model/noticia.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  noticias: Noticia[] = []; // Armazena as notícias carregadas do backend

  constructor(private noticiaService: NoticiaService) {}

  ngOnInit(): void {
    // this.carregarNoticias();
  }

  // carregarNoticias(): void {
  //   this.noticiaService.listar()( // Removendo a tipagem genérica
  //     (dados: Noticia[]) => {
  //       this.noticias = dados; // Armazena as notícias recebidas
  //     },
  //     (erro) => {
  //       console.error('Erro ao carregar notícias:', erro);
  //     }
  //   );
  // }
}
