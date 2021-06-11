import { Component, OnInit } from '@angular/core';
import { PostCrudService } from '../post-crud.service';
import { Router } from '@angular/router';
import { Post } from '../post-crud.model';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {

  post!: Post;
  constructor(
    private postCrudService: PostCrudService,
    private router: Router
  ) { }

  ngOnInit(): void {
 
  }

  deletePost():void { 
    this.postCrudService.delete(this.post.id!).subscribe(() => {
      this.postCrudService.showMessage('Post excluido com sucesso!');
      this.router.navigate(['/posts/byuser/username']);
    })

  }


}
