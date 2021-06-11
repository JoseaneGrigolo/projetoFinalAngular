import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria, Post } from '../postCrud/post-crud.model';
import { PostCrudService } from '../postCrud/post-crud.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  providers: [PostCrudService],
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria = {
    idCategoria: 0,
    descricao: ''
  }

  constructor(
    private postCrudService: PostCrudService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  createCat(): void {
    this.postCrudService.createCategoria(this.categoria).subscribe(() => {
      this.postCrudService.showMessage('Categoria criada!');
      this.router.navigate(['/home']);
    });
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }
}
