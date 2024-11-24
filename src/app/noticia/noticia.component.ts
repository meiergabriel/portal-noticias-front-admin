import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { NoticiaService } from '../service/noticia.service';
import { Router } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { Noticia } from '../model/noticia.model';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [NgFor, RouterModule, CommonModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent implements OnInit {

  noticia$: any;

  constructor(private noticiaService: NoticiaService, private router: Router) {}

  ngOnInit(): void {
    this.getNoticia();
  }

  public async getNoticia() {
    try {
      this.noticia$ = await lastValueFrom(this.noticiaService.listar());
    } catch (error) {
      console.error('Erro ao buscar noticia:', error);
    }
  }
  public editar(id: number){
    //this.categoria = await lastValueFrom(this.categoriaService.getCategoriaById(id));
    this.router.navigate(['noticia/editar/', id]);
    console.log(id);
  }

  public async remover(id: number){
    let ret = await lastValueFrom(this.noticiaService.remover(id));
    this.noticia$ = await lastValueFrom(this.noticiaService.listar());
  }
}
