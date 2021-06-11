import { Component, OnInit } from '@angular/core';
import { PostCrudService } from '../post-crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, Categoria } from '../post-crud.model';


@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {
  categorias!: Categoria[];

  selectedCategoria!: string;

  post!: Post;

  constructor(private postCrudService: PostCrudService,
    private router: Router, route: ActivatedRoute) {
    this.postCrudService.getCategorias().subscribe(categorias => this.categorias = categorias);
    const id = route.snapshot.paramMap.get('id')
    this.postCrudService.readById(id).subscribe(post => this.post = post)
  }


  ngOnInit(): void {

  }

  updatePost(): void {
    this.postCrudService.update(this.post).subscribe(() => {
      this.postCrudService.showMessage('Post atualizado com sucesso!');
      this.router.navigate(['/posts/byuser/username']);
    })

  }

  cancel(): void {
    this.router.navigate(['/posts/byuser/username']);
  }

}


