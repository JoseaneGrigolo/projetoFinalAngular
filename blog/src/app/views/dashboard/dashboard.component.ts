import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/components/postCrud/post-crud.model';
import { PostCrudService } from 'src/app/components/postCrud/post-crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts!: Post[];

  displayedColumns = ['id', 'titulo', 'categoria', 'data', 'like', 'action']

  public sessionStorage = sessionStorage;

  constructor(private postCrudService: PostCrudService, private router: Router) { }

  ngOnInit(): void {
    this.postCrudService.readByUsername().subscribe(posts => {
      this.posts = posts
      console.log(posts);
    })
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/posts/username/categorias/:idCategoria'])

  }

  reload(): void {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    })
  }

  deletePost(id: number): void {
    this.postCrudService.delete(id).subscribe(() => {
      this.postCrudService.showMessage('Post excluido com sucesso!');
      this.reload();
    })

  }
}
