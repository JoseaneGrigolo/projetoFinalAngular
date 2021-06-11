import { Component, OnInit } from '@angular/core';
import { PostCrudService } from '../post-crud.service';
import { Post } from '../post-crud.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-read',
  templateUrl: './post-read.component.html',
  styleUrls: ['./post-read.component.css']
})
export class PostReadComponent implements OnInit {


  posts!: Post[];

  displayedColumns = ['id', 'titulo', 'categoria', 'data', 'like', 'action']

  constructor(private postCrudService: PostCrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postCrudService.read().subscribe(posts => {
      this.posts = posts
      console.log(posts);
    })
  }

  postCompletoById(id: number): void {
    this.postCrudService.readById(id).subscribe((post) => {
      this.router.navigate([`/posts/${id}`]);
    });
  }

}