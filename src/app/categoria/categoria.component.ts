import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CategoriaService } from '../service/categoria.service';
import { Router } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [NgFor, RouterModule, CommonModule],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria$: any;

  constructor(private categoriaService: CategoriaService, private router: Router) {}

  ngOnInit(): void {
    this.getCategoria();
  }

  public async getCategoria() {
    try {
      this.categoria$ = await lastValueFrom(this.categoriaService.getCategoria());
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
    }
  }

  public editar(id: number){
    //this.categoria = await lastValueFrom(this.categoriaService.getCategoriaById(id));
    this.router.navigate(['categoria/editar/', id]);
    console.log(id);
  }

  public async remover(id: number){
    let ret = await lastValueFrom(this.categoriaService.remover(id));
    this.categoria$ = await lastValueFrom(this.categoriaService.getCategoria());
  }
}
