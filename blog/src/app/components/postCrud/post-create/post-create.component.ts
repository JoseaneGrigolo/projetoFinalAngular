import { Component, OnInit } from '@angular/core';
import { PostCrudService } from '../post-crud.service';
import { Router } from '@angular/router';
import { Categoria, Post } from '../post-crud.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  providers: [PostCrudService],
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  categorias!: Categoria[];

  selectedCategoria!: string;

  now = new Date();

  post: Post = {
    id: 0,
    titulo: '',
    conteudo: '',
    dataCriacao: this.now,
    qtdeLikes: 0,
    usuario: {
      idUsuario: 0,
      email: '',
      username: '',
      senha: ''
    },
    categoria: {
      idCategoria: 0,
      descricao: ''
    }
  }

  constructor(private postCrudService: PostCrudService,
    private router: Router) {
    this.postCrudService.getCategorias().subscribe(categorias => this.categorias = categorias);
  }

  ngOnInit(): void {
  }

  createPost(): void {
    this.postCrudService.create(this.post, this.selectedCategoria).subscribe(() => {
      this.postCrudService.showMessage('Post criado!');
      this.router.navigate(['/home']);
    });
  }

  cancel(): void {
    this.router.navigate(['/posts/byuser/username']);
  }

}
